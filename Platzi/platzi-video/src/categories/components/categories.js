import React from 'react';
import Category from './category';
import './categories.scss';
import SearchContainer from '../../widgets/containers/search';

const Categories = (props) => {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.categories.map(item => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  );
}

export default Categories;
