import { createStore } from 'redux';

import reducers from './ducks';

// const store = createStore(reducers);
const store = createStore(()=>{});

export default store;
