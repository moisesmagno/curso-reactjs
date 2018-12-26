import React from 'react';
import PropTypes from 'prop-types';

const ButtonSomar = props => (
    <button onClick={props.Click}>{ props.children }</button>
);

ButtonSomar.defaultProps = {
    children: 'Contador',
};

ButtonSomar.propTypes = {
  Click: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default ButtonSomar;
