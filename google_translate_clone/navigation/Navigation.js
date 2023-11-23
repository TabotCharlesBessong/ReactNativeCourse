import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import colors from "../constant/colors";
import { LanguageSelectScreen } from "../screens";

const Stack = createStackNavigator();

const Navigation = ({onLayout}) => {
  return (
      <NavigationContainer>
        <View onLayout={onLayout} style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{
            headerTitleStyle:{
              fontFamily:'mediumItalic',
              // textAlign:'center',
              color:'white'
            },
            headerStyle:{
              backgroundColor:colors.primary,
            }
          }} >
            <Stack.Group>
              <Stack.Screen
                options={{
                  headerTitle: "Google Translate",
                }}
                name="main"
                component={TabNavigator}
              />
            </Stack.Group>

            <Stack.Group screenOptions={{
              presentation:'modal',
              headerStyle:{
                backgroundColor:'white'
              },
              headerTitleStyle:{
                color:colors.textColor,
                fontFamily:'medium'
              },
              headerShadowVisible:false
            }} >
              <Stack.Screen
                name="LanguageSelector"
                component={LanguageSelectScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
          
        </View>
      </NavigationContainer>
    );
}

export default Navigation;