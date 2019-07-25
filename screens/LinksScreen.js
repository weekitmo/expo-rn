import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { ExpoLinksView } from "@expo/samples"
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent
} from "react-native-popup-dialog"
import { Button, ThemeProvider } from "react-native-elements"
import LinearGradient from 'react-native-linear-gradient';

export default function LinksScreen() {
  const [visible, setVisible] = useState(false)
  function ButtonEvent() {
    setVisible(visible ? false : true)
  }
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />

      <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
        <Button
          title="open"
          icon={{
            name: "subway",
            size: 16,
            color: "white"
          }}
          type="solid"
          iconRight
          buttonStyle={{ width: "90%" }}
          onPress={ButtonEvent}
          //ViewComponent={LinearGradient} // in expo donot use LinearGradient
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />
      </View>

      <Dialog
        visible={visible}
        onTouchOutside={() => {
          ButtonEvent()
        }}
        dialogTitle={
          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
              fontSize: 24
            }}>
            温馨提示
          </Text>
        }
        footer={
          <DialogFooter>
            <DialogButton text="取消" onPress={() => ButtonEvent()} />
            <DialogButton text="确定" onPress={() => ButtonEvent()} />
          </DialogFooter>
        }
        dialogStyle={{ width: "90%" }}>
        <DialogContent>
          <Text>这是一个对话框</Text>
        </DialogContent>
      </Dialog>
    </ScrollView>
  )
}

LinksScreen.navigationOptions = {
  title: "Links"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
})
