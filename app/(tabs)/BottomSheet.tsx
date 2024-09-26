import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import StarRating from "./StarRating";

const BottomSheetModal = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [rating, setRating] = React.useState(0);
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <Button title="Show bottom sheet" onPress={() => handleSnapPress(1)} />

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View style={{ alignItems: "flex-end", paddingBottom: 20 }}>
          <TouchableOpacity onPress={() => handleClosePress()}>
            <Text style={{ marginEnd: 20 }}>Close</Text>
          </TouchableOpacity>
        </View>

        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <StarRating
            maxStars={5}
            initialRating={rating}
            onRatingChange={(value) => setRating(value)}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default BottomSheetModal;
