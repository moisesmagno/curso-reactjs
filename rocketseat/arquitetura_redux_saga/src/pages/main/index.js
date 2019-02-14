import React, {Component, Fragment} from 'react';

class Main extends Component {
  render(){
    return <Fragment>
      <from>
          <label htmlFor="">Busque um repositório
            <br/>
            <input type="text" placeholder="usuário/repositório"/>
          </label>
          <input type="submit" value="Buscar"/>
      </from>

      <ul>
        <li>
          <p>
            <strong>Facebook React </strong> (Descrição do Repositório)
          </p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </Fragment>
  }
}

export default Main;
