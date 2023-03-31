import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LotoScreen } from "./screens/LotoScreen";
import { Main } from "./screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="LotoScreen" component={LotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
