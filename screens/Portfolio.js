import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

const Portfolio = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
    </View>
  );
};

export default Portfolio;

Portfolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam("name");
  const favColor = navigationData.navigation.getParam("favColor");

  return {
    headerTitle: `Profile de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
  };
};
