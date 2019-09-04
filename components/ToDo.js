import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, ListItem, CheckBox, Body, Form } from 'native-base';
import {
  StyleSheet
} from 'react-native';

export default class ToDo extends Component {
  render() {
    return (
      <ListItem>
        <CheckBox checked={this.props.todo && this.props.todo.completed} onPress={this.props.toggleComplete} />
        <Body>
          <Text style={this.props.todo && this.props.todo.completed ? styles.lineThrough : styles.normalText}>{this.props.todo ? this.props.todo.title : ''}</Text>
        </Body>
          <Icon onPress={this.props.deleteTodo} ios='ios-trash' android="md-trash" style={{fontSize: 20, color: 'red'}}/>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  lineThrough: {
    textDecorationLine: 'line-through'
  },
  normalText: {
    textDecorationLine: 'none'
  }
});