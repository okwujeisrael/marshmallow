import { Dispatch } from 'redux'
import spacex from '../api/spacex';
import { 
  FETCH_ROCKETS, 
  FETCH_DRAGONS, 
  TOGGLE_MODAL, 
  TDispatchTypes,
  MODAL_DESCRIPTION,
  MODAL_IMAGE
} from './actionTypes';

export const fetchRockets = () => async (dispatch: Dispatch<TDispatchTypes>) => {
  const response = await spacex.get('/rockets');

  dispatch({ type: FETCH_ROCKETS, payload: response.data });
};

export const fetchDragons = () => async (dispatch: Dispatch<TDispatchTypes>) => {
  const response = await spacex.get(`/dragons`);

  dispatch({ type: FETCH_DRAGONS, payload: response.data });
};

export const toggle = () => (dispatch: Dispatch<TDispatchTypes>) => {
  dispatch({ type: TOGGLE_MODAL})
};

export const fetchModalDescription = (payload: string) => (dispatch: Dispatch<TDispatchTypes>) => {
  dispatch({ type: MODAL_DESCRIPTION, payload })
};

export const fetchModalImage = (payload: string) => (dispatch: Dispatch<TDispatchTypes>) => {
  dispatch({ type: MODAL_IMAGE, payload })
};