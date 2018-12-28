import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.scss';

class Media extends Component {

  state = {
    cover: this.props.cover,
    title: this.props.title,
    author: this.props.author,
  }

  handleClick = (event) => {
    // Mudar o estado de um atributo
    this.setState({
      author: 'Moisés Salvador Escurra Aguilar'
    });
  }

  static propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])
  }

	render(){
		return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img src={this.state.cover} alt="" width={260} height={160} className="Media-image"/>
          <h3 className="Media-title">{ this.state.title }</h3>
          <p className="Media-author">{ this.state.author }</p>
        </div>
      </div>
		);
	}
}

export default Media;
