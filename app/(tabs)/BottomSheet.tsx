import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import StarRating from "./StarRating";
import CommentBox from "./CommentBox";
const questions = require("./util/dummy_response.json");

const BottomSheetModal = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const [rating, setRating] = React.useState(0);
  // variables
  const data = useMemo(() => questions, []);
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
    (item, index) => (
      <View key={item.question} style={styles.itemContainer}>
        <Text>{index + 1 + ". " + item.question}</Text>
        <StarRating
          maxStars={5}
          initialRating={rating}
          onRatingChange={(value) => setRating(value)}
        />
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <Button title="Rate the Service" onPress={() => handleSnapPress(1)} />

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
          {data.map(renderItem)}
          <CommentBox />
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
