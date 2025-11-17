import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Text } from 'react-native';

import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name="index"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const iconName = focused ? "view-list" : "view-list-outline";
                        size = focused ? size * 1.5 : size;
                        // Retornando a imagem
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        focused ? <></> :
                            <Text style={{ color : color }}>Lista</Text>,
                }}
            />
            <Tabs.Screen name="formulario"
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const iconName = focused ? "plus-box" : "plus-box-outline";
                        size = focused ? size * 1.5 : size;
                        // Retornando a imagem
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarLabel: ({ focused, color }) =>
                        focused ? <></> :
                            <Text style={{ color : color }}>Formulario</Text>,
                }}
            />
        </Tabs >
    )
}