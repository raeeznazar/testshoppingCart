const initialState = {
    items: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export default productReducer;