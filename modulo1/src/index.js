import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
    render(){
        return <a href="#">Enviar</a>;
    }
}

class ButtonCancel extends Component {
    render(){
        return <a href="#">{ this.props.title }</a>;
    }
}

class ButtonClear extends Component {
    render(){
        return <a href="#" onClick={ this.props.Click }>{ this.props.children }</a>;
    }
}

ButtonClear.defaultProps = {
    children: ' | Limpar'
}

ButtonClear.propTypes = {
    Click: PropTypes.func.isRequired,
    children: PropTypes.string
}

class App extends Component {
    
    btnClick(){
        alert('Botão Clicado!');
    }
    render(){
        return (
            <Fragment>
                <h1>Hello Moisés Salvador Escurra Aguilar :)</h1>
                <Button />
                <ButtonCancel title=" | Cancelar" />
                <ButtonClear Click={ this.btnClick }> | Limpar formulário </ButtonClear>
                <ButtonClear Click={ () => alert('Botão Limpar!') }/>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));