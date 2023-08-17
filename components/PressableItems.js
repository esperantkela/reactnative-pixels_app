import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

export default function PressableItems({ item, handleNavigate }) {
  return (
    <Pressable
      onPress={handleNavigate}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.cliked : Colors.white,
        },
        globalStyles.profileItem,
      ]}
    >
      <Text style={globalStyles.titleText}>{item.name}</Text>
      <Image style={globalStyles.profileImg} source={{ uri: item.img }} />

      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.infos}>{item.country}</Text>
        <Text style={globalStyles.infos}>{item.totalImg}</Text>
      </View>
    </Pressable>
  );
}
