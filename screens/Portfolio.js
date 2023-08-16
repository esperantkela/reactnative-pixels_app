import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Portfolio = (props) => {
  const handlePress = () => {
    props.navigation.navigate("Photo");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
      <Button title="Vers Photo" onPress={handlePress} />
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },
});
