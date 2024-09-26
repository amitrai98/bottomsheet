import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Modal } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetModal from "./BottomSheet";

export default function HomeScreen() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModal />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
