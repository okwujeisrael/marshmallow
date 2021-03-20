import { 
  TDispatchTypes, 
  TOGGLE_MODAL, 
  MODAL_DESCRIPTION, 
  MODAL_IMAGE 
} from '../actions/actionTypes';

interface IModalContent {
  toggle: boolean,
  description: string,
  image: string
}

const initialState = {
  toggle: false,
  description: "",
  image: ""
}

export default function modalReducer(state: IModalContent = initialState, action: TDispatchTypes): IModalContent  {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { 
        toggle: !state.toggle, 
        description: "", 
        image: "" 
      };
    case MODAL_DESCRIPTION:
      return { 
        toggle: !state.toggle, 
        description: action.payload, 
        image: "" 
      };
    case MODAL_IMAGE:
      return { 
        toggle: !state.toggle, 
        description: "", 
        image: action.payload 
      };
    default:
      return state;
  }
}
