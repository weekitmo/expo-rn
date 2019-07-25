import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import TabBarIcon from "./TabBarIcon"

const Circle = props => {
  const { text, imageName } = props
  let imageComponent = null
  if (imageName) {
    imageComponent = <TabBarIcon name={imageName} {...props} />
  }
  let textComponent = null
  if (text) {
    textComponent = (
      <Text style={{ fontSize: 19, textAlign: "center", color: "#fff" }}>
        {text}
      </Text>
    )
  }
  let circleContainerStyle = Object.assign({}, Styles.circle, {
    width: props["size"] || 28,
    height: props["size"] || 28,
    borderRadius: props["size"] || 28
  })
  return (
    <View
      style={circleContainerStyle}>
      {imageComponent}
      {textComponent}
    </View>
  )
}

const Styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    borderColor: "green",
    borderStyle: "solid",
    // borderRadius: 15,
    paddingBottom: 2
  }
})

export default Circle
