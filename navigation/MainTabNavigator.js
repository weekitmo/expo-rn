import React from "react"
import { Platform } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import LinksScreen from "../screens/LinksScreen"
import SettingsScreen from "../screens/SettingsScreen"
import TabBar from '../components/TabBar' 
import Icon from '../components/Icon'
import Circle from "../components/Circle"

import { DynamicStack, DynamicStack2 } from "./StackNavigator"

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  /**
   * { focused: boolean, horizontal: boolean, tintColor: string }
   * 设备处于横屏时，horizontal 是 true
   */
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
}

HomeStack.path = ""

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
)

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
}

LinksStack.path = ""

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
)

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
}

SettingsStack.path = ""
/**
 * @description 创建底部tab
 * @property 第二个参数BottomTabNavigatorConfig.tabBarComponent 可制定tab
 */
const bottomTab = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack: {
      screen: LinksStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => {
          console.log(tintColor, focused)
          var sourceImage = 'onLine'
          if (focused) {
            return <Circle imageName="logo-chrome" size={48} iconColor="#f76260" />
          } else {
            return <Icon name={sourceImage} size={48} color={tintColor} />
          }
          
        }
      }
    },
    SettingsStack
  },
  {
    lazy: true,
    initialRouteName: "HomeStack",
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#F34C56",
      inactiveTintColor: "#CBCBCB"
    }
  }
)

const tabNavigator = createStackNavigator(
  {
    Tab: {
      screen: bottomTab
    },
    Dynamic: DynamicStack,
    Second: DynamicStack2
  },
  {
    initialRouteName: "Tab",
    defaultNavigationOptions: ({ navigation }) => ({
      header: null,
      gesturesEnabled: true
    })
  }
)

tabNavigator.path = ""

export default tabNavigator
