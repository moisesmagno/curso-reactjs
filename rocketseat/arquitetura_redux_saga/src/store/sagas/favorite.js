import { call, put, select } from 'redux-saga/effects';
import api from '../../services/apiGit';

import { creator as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    //Busca se os dados retornados pela api, já e encontram no State do redux.
    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if(isDuplicated){
      yield put(FavoriteActions.addFavoriteFailure("O repsositório já existe no Store do Redux!"));
    }else{
      const repositoryData = {
        id: data.id,
        name: data.name,
        description: data.description,
        url: data.html_url
      }
      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailure("Erro ao adicionar repositório"));
  }
}
