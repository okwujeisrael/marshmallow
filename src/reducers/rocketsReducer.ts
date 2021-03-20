import { TPayload, TDispatchTypes, FETCH_ROCKETS } from '../actions/actionTypes'

type TDefaultState = TPayload | [];

export default function rocketsReducer(state: TDefaultState = [], action: TDispatchTypes): TDefaultState {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}
