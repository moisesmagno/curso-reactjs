import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Playlist from './playlist/components/playlist';
import data from '../src/api.json';

const app = document.querySelector('#app');

render(<Playlist data={data} />, app);


