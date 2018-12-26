import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import ButtonSomar from './ButtonSomar';

import './style.scss';

class Button extends Component {
	render() {
		return <a href="#">Enviar</a>;
	}
}

class ButtonCancel extends Component {
    render( ) {
        return <a href="#">{ this.props.title }</a>;
    }
}

class ButtonClear extends Component {

    static defaultProps = {
        children: ' | Limpar'
    }

    static propTypes = {
        Click: PropTypes.func.isRequired,
        children: PropTypes.string
    }

    render() {
        return <a href="#" onClick={ this.props.Click }>{ this.props.children }</a>;
    }
}

class App extends Component {

	state = {
        counter: 0,
    }

	btnClick(){
        alert('Botão Clicado!');
	}

    btnSomar = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        return (
            <Fragment>
                <h1>Hello Moisés Salvador Escurra Aguilar :)</h1>
                <Button />
                <ButtonCancel title=" | Cancelar" />
                <ButtonClear Click={ this.btnClick }> | Limpar formulário </ButtonClear>
                <ButtonClear Click={ () => alert('Botão Limpar!') }/>
                <ButtonSomar Click={this.btnSomar}> Somar </ ButtonSomar>
                <h1>{ this.state.counter }</h1>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));
