import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { COLORS } from "@/constants";
import Feather from "@expo/vector-icons/Feather";
import { useCart } from "@/context/CartContext";

export default function TabLayout() {
  const { cartItems } = useCart();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#B8B9CC",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#F1F1F5",

          height: 64, // ✅ taller for comfort
          paddingTop: 6,
          paddingBottom: 8,

          alignItems: "center",
          justifyContent: "center",

          elevation: 8, // ✅ subtle depth (Android)
          shadowColor: "#000", // ✅ iOS shadow
          shadowOpacity: 0.04,
          shadowRadius: 6,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28} // ✅ slightly bigger
              color={color}
            />
          ),
        }}
      />

      {/* CART */}
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Feather name="shopping-cart" size={28} color={color} />

              {cartItems?.length > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -8,
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: COLORS.accent,
                  }}
                />
              )}
            </View>
          ),
        }}
      />

      {/* FAVORITES */}
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
