export const SET_FORM_DATA = 'SET_FORM_DATA';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data,
});

export const updateInput = (name, value) => ({
  type: UPDATE_INPUT,
  payload: { name, value },
});

export const drawerAction=(payload)=>({
  type : "DRAWER_DATA",
  payload
})


