import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';


const TodoList = (props) => {
  console.log();
  return <Fragment>
      <ul>
        { props.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => props.removeTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={() => props.addTodo("Novo Todo")}>
        Adicionar Todo
      </button>
    </Fragment>;
};

//Validando as propriedades, funcões e estruturas.
TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  })).isRequired,
};

//Transforma algo do STADO do Grande Redux para propriedades do TodoList.
const mapStateToProps = state => ({
  todos: state.todos,
});

//Dispara nossas actions.
const mapDispatchProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchProps
)(TodoList);

