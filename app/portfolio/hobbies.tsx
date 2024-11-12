import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../constants/theme';

const HobbiesScreen = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>

            <Text style={[styles.title, { color: theme.primary }]}></Text>


            <View style={styles.separator}>
                <Text style={[styles.separatorText, { color: theme.primary }]}>Estos son mis hobbies:</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollView}>
                {[
                    'Salir a pasear', 'Senderismo', 'Ir a charquitos',
                    'FL Studio', 'Jugar a Videojuegos', 'Viajar', 'Desarrollar apps',
                    'Anime', 'Leer', 'Competir en tenis',
                ].map((hobby, index) => (
                    <View key={index} style={[styles.hobbyContainer, { backgroundColor: theme.secondary }]}>
                        <MaterialIcons name="star" size={20} color={theme.primary} style={styles.icon} />
                        <Text style={[styles.hobbyText, { color: theme.text }]}>{hobby}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 80,
    },
    separator: {
        paddingVertical: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separatorText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    hobbyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    icon: {
        marginRight: 6,
    },
    hobbyText: {
        fontSize: 16,
    },
});

export default HobbiesScreen;


