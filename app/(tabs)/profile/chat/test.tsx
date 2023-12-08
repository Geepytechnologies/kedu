import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello!" },
    { id: "2", text: "How are you?" },
    // Add more messages as needed
  ]);

  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { id: `${messages.length + 1}`, text: inputText },
      ]);
      setInputText("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 8,
          }}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          style={{ marginLeft: 10 }}
        >
          <Text style={{ color: "blue" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
