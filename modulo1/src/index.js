import React, { Component, Fragment } from 'react';
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
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));