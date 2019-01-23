import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Footer = (props) => <p>Você tem {props.countFavorites} e favoritos</p>;

Footer.propTypes = {
  countFavorites: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  countFavorites: state.favorites.data.length
})

export default connect(mapStateToProps)(Footer);
