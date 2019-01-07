import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList/index';
import moment from 'moment';

class Main extends Component {

  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    loading: false,
  }

  handleAddRepository = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    try{

      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });

      // Recording the repositories in Local Storage.
      localStorage.setItem('repository', JSON.stringify(this.state.repositories));
      console.log(JSON.parse(localStorage.getItem('repository')));

    } catch (err) {

      this.setState({
        repositoryError: true,
      });

    } finally {
      this.setState({ loading: false });
    }
  }

  captureValueInput = (event) => {
    this.setState({
      repositoryInput: event.target.value,
    });
  }

  removeRepositoryClick = (id) => {
    this.setState({
      repositories: this.state.repositories.filter(repository => repository.id !== id),
    });

    const currentLocalStorage = JSON.parse(localStorage.getItem('repository'));
    const updatedLocalStorage = currentLocalStorage.filter(repository => repository.id !== id);
    localStorage.setItem('repository', JSON.stringify(updatedLocalStorage));

    console.log(JSON.parse(localStorage.getItem('repository')));
  }

  render () {
    return (
      <Container>

        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositorio"
            value={this.state.repositoryInput}
            onChange={ this.captureValueInput }
          />
          <button type="submit">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</button>
        </Form>

        <CompareList repositories={this.state.repositories} removeRepository={this.removeRepositoryClick} />

      </Container>
    )
  }
}

export default Main;
