import React from 'react';
import FullScreemIcon from '../../icons/components/full-screem';
import './full-screem.scss';

const FullScreen = (props) => (
  <div
    className="FullScreem"
    onClick={props.handleFullScreenClick}
  >
    <FullScreemIcon
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen;
