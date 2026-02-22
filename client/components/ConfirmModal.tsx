import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { COLORS } from "@/constants";

export default function ConfirmModal({
  visible,
  onCancel,
  onConfirm,
  title = "Are you sure?",
  description = "Do you really want to continue?",
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView
        intensity={20}
        tint="dark"
        className="flex-1 items-center justify-center"
      >
        <View className="bg-white w-5/6 rounded-2xl p-6">
          <Text className="text-lg font-bold text-primary text-center mb-2">
            {title}
          </Text>

          <Text className="text-secondary text-center mb-6">{description}</Text>

          <View className="flex-row justify-between">
            <Pressable
              onPress={onCancel}
              className="flex-1 mr-2 py-3 rounded-full border border-gray-200 items-center"
            >
              <Text className="font-semibold text-primary">Cancel</Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              className="flex-1 ml-2 py-3 rounded-full bg-red-500 items-center"
            >
              <Text className="font-semibold text-white">Log Out</Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}
