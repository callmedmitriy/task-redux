import { 
	EDIT_SERVICE, 
	CLEAR_FORM,
	UPDATE_SERVICE,
	ADD_SERVICE, 
	REMOVE_SERVICE, 
	CHANGE_SERVICE_FIELD 
} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(id,name,price) {
  return {type: EDIT_SERVICE, payload: {id,name,price}}
}

export function updateService(id,name,price) {
  return {type: UPDATE_SERVICE, payload: {id, name, price}}
}

export function clearForm() {
  return {type: CLEAR_FORM}
}