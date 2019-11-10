import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, clearForm, updateService} from '../actions/actionCreators';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  console.log('ServiceAdd')
  console.log(item)
  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
  }

  const handleUpdate = evt => {
    evt.preventDefault();
    dispatch(updateService(item.id,item.name,item.price));
  }

  const handleCancel = evt => {
    evt.preventDefault();
    dispatch(clearForm());
  }

  if (item.edit && item.id) {
    return (
      <form onSubmit={handleSubmit}>
        <input name='name' onChange={handleChange} value={item.name} />
        <input name='price' onChange={handleChange} value={item.price} />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
}

export default ServiceAdd;
