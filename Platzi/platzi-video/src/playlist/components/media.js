import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.scss';

class Media extends PureComponent {

  static propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio'])
  }

  handleClick = (event) => {
    this.props.openModal(this.props)
  }

	render(){
		return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img src={this.props.cover} alt="" width={260} height={160} className="Media-image"/>
          <h3 className="Media-title">{ this.props.title }</h3>
          <p className="Media-author">{ this.props.author }</p>
        </div>
      </div>
		);
	}
}

export default Media;
