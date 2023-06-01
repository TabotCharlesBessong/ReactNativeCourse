
import { createStore } from 'redux';

const initialState = {
  items: [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = { id: state.items.length + 1, title: action.payload };
      return { ...state, items: [...state.items, newItem] };
    case 'REMOVE_ITEM':
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: updatedItems };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;