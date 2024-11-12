import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from './constants/theme';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1730829382600-331831cfa0e4?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={[styles.container, { backgroundColor: theme.background }]}
        >
            <View style={[styles.overlay, { backgroundColor: theme.overlay }]}>
                <Text style={[styles.welcomeText, { color: theme.text }]}>¡Bienvenido a mi Portfolio!</Text>
                <Text style={[styles.explanationText, { color: theme.text }]}>
                    Aquí puedes encontrar más información sobre mí y mis intereses.
                </Text>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: theme.primary }]}
                    onPress={() => router.push('/portfolio')}
                >
                    <Text style={[styles.buttonText, { color: theme.text }]}>Ir al Portfolio</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
                    <Ionicons
                        name={theme === 'dark' ? 'sunny' : 'moon'}
                        size={24}
                        color={theme.primary}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    explanationText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
    },
    themeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});

export default WelcomeScreen;



