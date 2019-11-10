import { EDIT_SERVICE } from './actionTypes';


export function editService(id) {
  return {type: EDIT_SERVICE, payload: {id}}
}