import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Button, ThemeProvider } from "react-native-elements"
export default class FullScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation.state)

    return {
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: "#409EFF"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
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
        <Text style={styles.text}>This is Guide Interface!</Text>
        <View
          style={{ flexDirection: "row", justifyContent: "center" }}>
          <ThemeProvider>
            <Button title="back" onPress={() => this.back()} />
          </ThemeProvider>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Button title="open second" buttonStyle={{ backgroundColor: "orange" }} onPress={() => this.jumpSecond()} />
        </View>
      </View>
    )
  }

  back() {
    const { state } = this.props.navigation
    console.log("back", state, this.props.navigation.getParam("back_keys", "1"))
    //this.props.navigation.back(state.back_keys || null)
    this.props.navigation.pop()
  }
  jumpSecond() {
    this.props.navigation.navigate("Second", { usr: "moweijie" })
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
    color: "black",
    fontSize: 22
  }
})
