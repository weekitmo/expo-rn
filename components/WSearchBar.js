import React from 'react'
import { SearchBar } from "react-native-elements"
import { DeviceEventEmitter } from 'react-native'
export default class WSearchBar extends React.Component {
  state = {
    search: ""
  }
  componentDidMount() {
    DeviceEventEmitter.emit("searchmount", "yes")
  }
  updateSearch = search => {
    console.log("child: ", search)
    const { onSearchCb } = this.props
    onSearchCb(search + "!")
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="请输入..."
        onChangeText={this.updateSearch}
        lightTheme={true}
        value={search}
      />
    );
  }
}