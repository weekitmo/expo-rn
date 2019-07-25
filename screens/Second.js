import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Button, ThemeProvider } from "react-native-elements"
export default class Second extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "second",
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
    console.log(`Second componentDidMount`, this.props.navigation.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Second</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <ThemeProvider>
            <Button
              title="back to prev"
              style={{ backgroundColor: "red" }}
              onPress={() => this.back()}
            />
          </ThemeProvider>
        </View>
      </View>
    )
  }

  back() {
    console.log(this.props.navigation)
    this.props.navigation.pop()
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
    color: "green",
    fontSize: 22,
    fontWeight: "700"
  }
})
