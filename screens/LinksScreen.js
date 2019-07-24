import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Dialog, {  DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Button, ThemeProvider } from "react-native-elements"

export default function LinksScreen() {
  const [visible, setVisible] = useState(false);
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

      <ThemeProvider>
            <Button title="haha!" onPress={ButtonEvent}/>
      </ThemeProvider>

      <Dialog
        visible={visible}
        onTouchOutside={() => {
          ButtonEvent();
        }}
        dialogTitle={
          <Text style={{marginTop: 10, marginLeft: 10, marginBottom: 10, fontSize: 24}}>温馨提示</Text>
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="取消"
              onPress={() => ButtonEvent()}
            />
            <DialogButton
              text="确定"
              onPress={() => ButtonEvent()}
            />
          </DialogFooter>
        }
        dialogStyle={{width:"90%"}}
      >
        <DialogContent>
          <Text>这是一个对话框</Text>
        </DialogContent>
      </Dialog>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
