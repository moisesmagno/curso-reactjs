import React from 'react';
import './home-layout.scss';

const HomeLayout = (props) => {
  return (
    <section className="HomeLayout">
      { props.children }
    </section>
  );
}

export default HomeLayout;
