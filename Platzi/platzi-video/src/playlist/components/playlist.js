import React, { Component } from 'react';
import Media from './media';
import './playlist.scss';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    return (
      <div className="playlist">
        {
          playlist.map(item => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    );
  }
}

export default Playlist;
