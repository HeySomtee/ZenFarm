import React from 'react'
import { View, Image, Text, StatusBar } from 'react-native';
import { styles } from './Style';
import Console from './Console';

function Webview() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.container2}>
                <View style={styles.titleBar}>
                    <View style={styles.brand}>
                        <View>
                            <Image
                                source={{ uri: 'https://pbs.twimg.com/profile_images/1703483425728950272/W7DpL6he_400x400.jpg' }}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                        </View>
                        <View>
                            <Text style={styles.boldText}>Zen Farm</Text>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.boldText}>...</Text>
                    </View>
                </View>

                <View style={styles.mainConsole}>
                    <Console />
                </View>
            </View>
        </View>
    )
}

export default Webview