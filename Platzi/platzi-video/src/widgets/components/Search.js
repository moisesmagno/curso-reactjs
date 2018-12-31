import React from 'react';
import './search.scss';

const Search = (props) => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input
      type="text"
      ref={props.setRef}
      name="search"
      placeholder="Busca tu video favorito :)"
      className="Search-input"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
