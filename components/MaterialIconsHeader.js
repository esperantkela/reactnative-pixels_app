import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from "../styles/Colors";

export default function MaterialIconsHeader(props) {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      {...props}
      iconSize={23}
      color={Colors.white}
    />
  );
}
