import React from "react"
import { Ionicons } from "@expo/vector-icons"

import Colors from "../constants/Colors"

export default function TabBarIcon(props) {
  const { iconColor } = props
  return (
    <Ionicons
      name={props.name}
      size={props.size || 26}
      style={{ marginBottom: -3 }}
      color={
        iconColor
          ? iconColor
          : props.focused
          ? Colors.tabIconSelected
          : Colors.tabIconDefault
      }
    />
  )
}
