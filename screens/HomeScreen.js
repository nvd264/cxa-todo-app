import React from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Text, Body, Icon, Button } from 'native-base';
import SearchBar from '../components/SearchBar';
import ToDo from '../components/ToDo';
import { connect } from 'react-redux';
import {deleteTodo, updateTodo} from '../store/actions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(text) {
    this.setState({
      search: text
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <SearchBar placeholder="Search All" onChangeSearch={this.onChangeSearch} />
          <Content>
            {this.props.todos.filter(todo => todo.title.indexOf(this.state.search) !== -1).map((todo, idx) =>
              <ToDo
                key={idx}
                todo={todo}
                deleteTodo={() => this.props.deleteTodo(todo)}
                toggleComplete={() => this.props.updateTodo({
                  ...todo,
                  completed: !todo.completed
                })}
              />
            )}
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

function mapStateToProps (state) {
  return {
      todos: state.todoReducer.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
