import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as FavoriteActions} from '../../store/ducks/favorites';

class Main extends Component {

  state = {
    repositoryInput: ''
  };

  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
      })),
      error: PropTypes.oneOfType([null, PropTypes.string])
    }).isRequired,
  };

  handleAddRepository = (event) => {

    event.preventDefault();

    //Agora temos cessao ao addFavorite do acetion/favorite
    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  };

  render(){
    return <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input placeholder="usuário/repositório" value={this.state.repositoryInput} onChange={e => this.setState(
                { repositoryInput: e.target.value }
              )} />
          <button type="submit">Adicionar</button>

          {this.props.favorites.loading && <span>Carregando...</span>}
          {!! this.props.favorites.error && (
            <span style={{ color: "#F00" }}>{this.props.favorites.error} </span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>)}
        </ul>
      </Fragment>;
  }
}

//Transforma a a propriedade favorites do estado do redux, para a propriedade favorites que será incorporada no PROPS do compoente.
const mapStateToProps = state => ({
  favorites: state.favorites
});

//Adicionar as actions do action favorite a PROPS do componente.
const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
