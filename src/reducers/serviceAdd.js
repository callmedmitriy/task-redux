import {UPDATE_SERVICE, ADD_SERVICE, EDIT_SERVICE, CLEAR_FORM, CHANGE_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = {
  id: '',
  name: '',
  price: '',
  edit: false
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    }
    case EDIT_SERVICE: {
      const {id, name, price} = action.payload;
      console.log('EDIT_SERVICE')
      console.log(action.payload)
      return {...state, id: id, name: name, price: price, edit: true };
    }
    case UPDATE_SERVICE:
    case ADD_SERVICE:
    case CLEAR_FORM:
      return {...initialState}
    default:
      return state;
  }
}
