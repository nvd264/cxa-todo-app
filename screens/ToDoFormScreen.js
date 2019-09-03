import React from 'react';
import {
  StyleSheet,
  Alert
} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body, Icon, Button, Form, Item, Label, Input, Title } from 'native-base';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from '../store/actions';

class ToDoFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onAddToDo = this.onAddToDo.bind(this);
  }

  onChangeName(value) {
    this.setState({
      name: value
    });
  }

  onAddToDo() {
    if(!this.state.name) return;
    this.props.addTodo({
      title: this.state.name,
      completed: false
    });
    this.setState({
      name: ''
    }, () => {
      this.props.navigation.navigate('Home');
    });

  }

  render() {
    return (
      <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Add New</Title>
            </Body>
          </Header>
          <Content style={styles.contentContainer}>
            <Form>

            <Item style={styles.input}>
              <Input placeholder="Need to do..." value={this.state.name} onChangeText={todoName => this.onChangeName(todoName)}  />
            </Item>

            <Item>
            <Button style={styles.button} block primary onPress={this.onAddToDo}><Text> Add </Text></Button>

            </Item>

            </Form>
          </Content>

        </Container>
    );
  }
}

ToDoFormScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingRight: 10
  },
  input: {
    marginBottom: 10
  },
  button: {
    width: '100%'
  }
});

function mapDispatchToProps (dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ToDoFormScreen)
