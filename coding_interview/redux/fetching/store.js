import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function fetchData() {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await fetch('https://example.com/api/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
 }
}