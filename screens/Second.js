import React from "react"
import {
  Text,
  View,
  StyleSheet
} from "react-native"
import { Button, ThemeProvider } from "react-native-elements"
export default class Second extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    console.log(`Second componentDidMount`, this.props.navigation.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Second
        </Text>
        <ThemeProvider>
            <Button title="go back" style={{ backgroundColor: 'red' }} onPress={() => this.goBack()}/>
          </ThemeProvider>
      </View>
    )
  }

  goBack() {
    const { state } = this.props.navigation
    console.log("back", this.props.navigation, this.props.navigation.getParam('usr', 'hehe'))
    //this.props.navigation.goBack(state.back_keys || null)
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