import { Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

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

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="Info"
          iconName="info-outline"
          onPress={() => alert("portfolio de " + name)}
        />
      </HeaderButtons>
    ),
  };
};
