import { all } from 'redux-saga/effects';

import MapSagas from './containers/Map/sagas';

export default function* rootSaga() {
    yield all([
        MapSagas()
    ]);
}
