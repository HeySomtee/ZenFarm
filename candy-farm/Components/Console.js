import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { styles } from './Style';
const Console = () => {

    return (
        <View style={styles.consoleContainer}
            blurType="light"
            blurAmount={3.5}
        >
            <View style={styles.mainConsoleBtn}>
                <Image
                    source={require('./ComponentAssets/mainBtn.png')}
                    style={{ width: '110%', height: '110%' }}
                />
            </View>
        </View>
    );
};

export default Console;
