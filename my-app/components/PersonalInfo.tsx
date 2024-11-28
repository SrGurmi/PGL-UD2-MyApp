
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';

const PersonalInfo = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.headerBackground }]}>
            <Image style={styles.avatar} source={require('../assets/94848171.gif')} />
            <View style={[styles.infoContainer, { backgroundColor: theme.primary }]}>
                <Text style={[styles.name, { color: theme.text }]}>Alejandro Guzmán Pérez</Text>
                <Text style={[styles.description, { color: theme.text }]}>
                    Soy un estudiante de 2ºDAM del colegio Salesianos La Cuesta, apasionado por aprender nuevas formas de desarrollo de aplicaciones y webs!
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        marginTop: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    infoContainer: {
        padding: 16,
        alignItems: 'center',
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        fontStyle: 'italic'
    },
});

export default PersonalInfo;
