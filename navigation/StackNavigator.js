import { createStackNavigator, createAppContainer } from 'react-navigation';
import FullScreen from "../screens/FullScreen"
import Second from "../screens/Second"
import { Platform } from "react-native"

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
})
// FullScreen
const FullScreenStack = createStackNavigator(
  {
    FullScreen: FullScreen
  },
  config
)

FullScreenStack.path = ""

// Second
const SecondStack = createStackNavigator(
  {
    Second: Second
  },
  config
)

SecondStack.path = ""

export const DynamicStack = createAppContainer(FullScreenStack)
export const DynamicStack2 = createAppContainer(SecondStack)