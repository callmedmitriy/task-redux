import nanoid from 'nanoid';
import {UPDATE_SERVICE, ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case UPDATE_SERVICE: {
      const {id, name, price} = action.payload;
      console.log('UPDATE_SERVICE');
      console.log(action.payload)
      console.log(state)
      return state.map(service => service.id === id ? {...service, name: name, price: price} : service)
    }
    default:
      return state;
  }
}
