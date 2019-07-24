import React from "react"
import {
  Text,
  View,
  StyleSheet
} from "react-native"
import { Button, ThemeProvider } from "react-native-elements"
export default class FullScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    console.log(`FullScreen componentDidMount`)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>新界面
        </Text>
        <ThemeProvider>
            <Button title="go back" onPress={() => this.goBack()}/>
        </ThemeProvider>
        <ThemeProvider>
            <Button title="go second" onPress={() => this.goSecond()}/>
        </ThemeProvider>
      </View>
    )
  }

  goBack() {
    const { state } = this.props.navigation
    console.log("back", this.props.navigation, this.props.navigation.getParam('back_keys', '1'))
    //this.props.navigation.goBack(state.back_keys || null)
    this.props.navigation.pop()
  }
  goSecond() {
    this.props.navigation.navigate("Second", { usr: "moweijie"})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    color: "blue"
  },
  text: {
    color: "red",
    fontSize: 24
  }
})