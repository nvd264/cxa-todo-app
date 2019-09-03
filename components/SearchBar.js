import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder={this.props.placeholder} onChangeText={text => this.props.onChangeSearch(text)} />
        </Item>
      </Header>
    );
  }
}