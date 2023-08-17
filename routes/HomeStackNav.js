import { Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Photo from "./../screens/Photo";
import Portfolio from "./../screens/Portfolio";
import Colors from "../styles/Colors";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Accueil",
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="blue"
        />
      ),
    },
  },
  Photo: {
    screen: Photo,
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: "Profile",
    },
  },
};

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
};

const StackNav = createStackNavigator(screens, defaultNavigationOptions);

export default createAppContainer(StackNav);
