import React from 'react';
import Media from './media';
import './playlist.scss';

// Componente Funcional
const Playlist = (props) => {
  return (
    <div className="playlist">
      {
        props.playlist.map(item => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  );
}

export default Playlist;
