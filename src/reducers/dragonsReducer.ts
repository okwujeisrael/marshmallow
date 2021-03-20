import { TPayload, TDispatchTypes, FETCH_DRAGONS } from '../actions/actionTypes';

type TDefaultState = TPayload | [];

export default function dragonsReducer(state: TDefaultState = [], action: TDispatchTypes): TDefaultState {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    default:
      return state;
  }
}