import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';

const QRScreen = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
    <Image source={require('../assets/qr-code.png')} style={styles.qrImage} />
    </View>
);
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 120 },
    qrImage: { width: 200, height: 200 },
});

export default QRScreen;
