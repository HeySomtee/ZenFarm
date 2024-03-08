import React, { Component } from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const domain = 'https://www.coingecko.com'; // Replace with your domain

export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiesString: '',
      isReady: false,
    };
  }

  componentDidMount() {
    this.provideMeSavedCookies();
  }

  onNavigationStateChange = (navState) => {
    this.currentUrl = navState.url;
  };

  onLoadEnd = () => {
    let successUrl = `${domain}/account/sign_in`; // Replace with your success URL
    if (this.currentUrl === successUrl) {
      this.getAndSaveCookies();
    }
  };

  getAndSaveCookies = async () => {
    const cookies = await this.webViewRef.injectJavaScript(`
      document.cookie
    `);
    AsyncStorage.setItem('savedCookies', cookies);
    this.setState({ cookiesString: cookies });
  };

  provideMeSavedCookies = async () => {
    try {
      const savedCookies = await AsyncStorage.getItem('savedCookies');
      if (savedCookies) {
        this.setState({ cookiesString: savedCookies, isReady: true });
      } else {
        this.setState({ isReady: true });
      }
    } catch (error) {
      console.error('Error retrieving saved cookies:', error);
      this.setState({ isReady: true });
    }
  };

  render() {
    const { cookiesString, isReady } = this.state;
    if (!isReady) {
      return null;
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <WebView
          ref={(ref) => (this.webViewRef = ref)}
          source={{ uri: domain }}
          sharedCookiesEnabled
          javaScriptEnabled
          domStorageEnabled
          onLoadEnd={this.onLoadEnd}
          onNavigationStateChange={this.onNavigationStateChange}
          style={{ flex: 1 }}
          injectedJavaScript={`
            document.cookie = '${cookiesString}';
          `}
        />
      </SafeAreaView>
    );
  }
}
