import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HobbiesScreen from './hobbies';
import QRScreen from './qr';
import PersonalInfo from './PersonalInfo';
import { useTheme } from '../constants/theme';

const Tab = createBottomTabNavigator();

const PortfolioScreen = () => {
    const { theme } = useTheme();

    return (
        <>
            <PersonalInfo />
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: theme.background,
                        paddingBottom: 10,
                        paddingTop: 5,
                        borderTopColor: theme.primary,
                    },
                    tabBarActiveTintColor: theme.primary,
                    tabBarInactiveTintColor: theme.text,
                }}
            >
                <Tab.Screen
                    name="Hobbies"
                    component={HobbiesScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="QR Code"
                    component={QRScreen}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </>
    );
};

export default PortfolioScreen;

