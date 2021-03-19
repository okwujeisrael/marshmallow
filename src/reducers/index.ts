import { combineReducers } from 'redux';
import dragonsReducer from './dragonsReducer';
import rocketsReducer from './rocketsReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  dragons: dragonsReducer,
  rockets: rocketsReducer,
  modal: modalReducer,
});
