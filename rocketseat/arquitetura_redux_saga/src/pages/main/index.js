import React, {Component, Fragment} from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creator as FavoriteActions} from '../../store/ducks/favorites';

class Main extends Component {

  state = {
    repositoryInput: ''
  };

  handleAddRepository = (event) => {
    event.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  }

  render(){
    return <Fragment>
      <form onSubmit={this.handleAddRepository}>
          <label htmlFor="">Busque um repositório
            <br/>
            <input type="text" placeholder="usuário/repositório"/>
          </label>
          <input type="submit" value="Buscar"/>
      </form>

      <ul>
        <li>
          <p>
            <strong>Facebook React </strong> (Descrição do Repositório)
          </p>
          <a href="htts://facebook.com">Acessar repositório</a>
        </li>
      </ul>
    </Fragment>
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Main);
