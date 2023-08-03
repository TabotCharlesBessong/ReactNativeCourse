import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

const Navigation = ({onLayout}) => {
  return (
      <NavigationContainer>
        <View onLayout={onLayout} style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                options={{
                  headerTitle: "Google Translate",
                }}
                name="main"
                component={TabNavigator}
              />
            </Stack.Group>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    );
}

export default Navigation;