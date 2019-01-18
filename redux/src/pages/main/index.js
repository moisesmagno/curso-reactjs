import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {

  state = {
    repositoryInput: ''
  };

  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string
    })).isRequired,
  };

  handleAddRepository = (event) => {

    event.preventDefault();

    //Agora temos cessao ao addFavorite do acetion/favorite
    this.props.addFavoriteRequest(this.state.repositoryInput);
  };

  render(){
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({repositoryInput: e.target.value})}
          />
          <button>Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

//Transforma a a propriedade favorites do estado do redux, para a propriedade favorites que será incorporada no PROPS do compoente.
const mapStateToProps = state => ({
  favorites: state.favorites
});

//Adicionar as actions do action favorite a PROPS do componente.
const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
