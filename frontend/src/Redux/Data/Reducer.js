import {
  DESCRIPTION_DATA,
  SORTED_DATA,
  CART_DATA,
  PRODUCTS_DATA,
} from "./ActionTypes";
const initState = {
  data: [],
  descriptionData: [],
  sortedData: [],
  cartData: [],
};

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DESCRIPTION_DATA: {
      return {
        ...state,
        descriptionData: payload,
      };
    }

    case PRODUCTS_DATA: {
      return {
        ...state,
        data: payload,
      };
    }

    case SORTED_DATA: {
      return {
        ...state,
        sortedData: [...payload],
      };
    }

    case CART_DATA: {
      return {
        ...state,

        cartData: [...state.cartData, payload],
      };
    }

    default: {
      return state;
    }
  }
};
