import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Photo = ({ navigation }) => {
  const handlePress = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>

      <Button title="Retour vers Home" onPress={handlePress} />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },
});
