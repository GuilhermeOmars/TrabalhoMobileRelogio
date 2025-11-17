
import { Tabs } from "expo-router";
import { Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingBottom: 6,
          paddingTop: 6,
          height: 60,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({focused}) =>
          <Text style={{ color: focused ? "#fff7abff" : "#8a8a8aff" }}>Alarm</Text>,
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="alarm"
              size={ 1.3 * size }
              color={focused? "#fff7abff" : "#8a8a8aff"}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="stopwatch"
        options={{
          tabBarLabel: ({focused}) =>
          <Text style={{ color: focused ? "#fff7abff" : "#8a8a8aff" }}>Stopwatch</Text>,
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="clock"
              size={ size * 1.3 }
              color={focused ? "#fff7abff" : "#8a8a8aff" }
            />
          ),
        }}
      />
    </Tabs>
  );
}
