import Rect, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.querySelector('#modal-container')
    )
  }
}

export default ModalContainer;
