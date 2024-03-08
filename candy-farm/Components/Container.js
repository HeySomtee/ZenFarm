import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar} from 'react-native';
import axios from 'axios';

const Container = () => {
  const [faviconUrl, setFaviconUrl] = useState(null);
  const [html, setHtml] = useState(null);
  const url = 'https://www.coingecko.com/';

  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        // Fetch the HTML content of the website
        const response = await axios.get(url);
        const htmlContent = response.data;
        setHtml(htmlContent)
        // Extract the favicon URL from the HTML content
        const faviconRegex = /<link.*?rel="icon".*?href="(.*?)".*?>/gi;
        const matches = faviconRegex.exec(htmlContent);
        if (matches && matches[1]) {
          console.log(matches);
          console.log(matches[1]);
          matches[1].charAt(0) == '/' || matches[1].charAt(0) == '\\'  ? setFaviconUrl(`${url}${matches[1]}`) : setFaviconUrl(matches[1]) 
        }
      } catch (error) {
        console.error('Error fetching favicon:', error);
      }
    };

    fetchFavicon();
  }, []);

  return (
    <View >
      <StatusBar />
      {faviconUrl ? (
        <Image source={{ uri: faviconUrl }} style={{ width: 50, height: 50 }} />
      ) : (
        <View style={{ width: 16, height: 16, backgroundColor: 'gray' }} />
      )}
      {/* <Text>{html}</Text> */}
      {/* You can render your WebView component here */}
    </View>
  );
};

export default Container;
