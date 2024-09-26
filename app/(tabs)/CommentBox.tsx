import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  const handleCommentSubmit = () => {
    setSubmittedComment(comment);
    setComment(""); // Clear the input box after submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave a Comment:</Text>
      <TextInput
        style={styles.input}
        value={comment}
        placeholder="Type your comment here..."
        onChangeText={(text) => setComment(text)}
        multiline={true}
      />
      <Button title="Submit" onPress={handleCommentSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  submittedText: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
});

export default CommentBox;
