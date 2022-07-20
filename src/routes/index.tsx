import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../screens/Signin";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}