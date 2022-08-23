import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Shopping Cart main context
const ShoppingCart = createContext();

// Setting custom name for the context which is visible on react dev tools
ShoppingCart.displayName = "ShoppingCartContext"

// Shopping Cart reducer
function ShoppingCartReducer(state, action) {
  switch (action.type) {
    case "OPEN_CART": {
      return { ...state, openCart: action.value };
    }
    case "UPDATE_CART": {
      return { ...state, cart: action.value };
    }
    case "INCREMENT_PRODUCT": {
      return {
        ...state, cart: state.cart.map(product =>
          product.id === action.value ? { ...product, quantity: product.quantity + 1 } : product
        )
      };
    }
    case "DECREMENT_PRODUCT": {
      return {
        ...state,
        cart: state.cart.flatMap(
          product => {
            if (product.id !== action.value) return product;
            return (product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : [])
          })
      };
    }
    case "ADD_PRODUCT": {
      const exists = state.cart.find(product => product.id === action.value.id);
      if (exists) {
        return (
          {...state, cart: state.cart.map(product =>
            product.id === exists.id ? { ...product, quantity: product.quantity + 1 } : product
          )}
        )
      }
      return (
        { ...state, cart: [...state.cart, { ...action.value, quantity: 1 }] }
      )
    }
    case "REMOVE_PRODUCT": {
      return {
        ...state, cart: state.cart.filter(product =>
          (product.id !== action.value)
        )
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Shopping Cart context provider
function ShoppingCartControllerProvider({ children }) {
  const initialState = {
    cart: [],
    openCart: false,
  };

  const [controller, dispatch] = useReducer(ShoppingCartReducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <ShoppingCart.Provider value={value}>{children}</ShoppingCart.Provider>;
}


// Shopping Cart custom hook for using context
function useShoppingCartController() {
  const context = useContext(ShoppingCart);

  if (!context) {
    throw new Error(
      "useShoppingCartController should be used inside the ShoppingCartControllerProvider."
    );
  }

  return context;
}


// Typechecking props for the ShoppingCartControllerProvider
ShoppingCartControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module ShoppingCart functions
const setOpenCart = (dispatch, value) => dispatch({ type: "OPEN_CART", value });
const setCart = (dispatch, value) => dispatch({ type: "UPDATE_CART", value });
const incrementProduct = (dispatch, value) => dispatch({ type: "INCREMENT_PRODUCT", value });
const decrementProduct = (dispatch, value) => dispatch({ type: "DECREMENT_PRODUCT", value });
const removeProduct = (dispatch, value) => dispatch({ type: "REMOVE_PRODUCT", value });
const addProduct = (dispatch, value) => dispatch({ type: "ADD_PRODUCT", value });

export {
  ShoppingCartControllerProvider,
  useShoppingCartController,
  setOpenCart,
  setCart,
  incrementProduct,
  decrementProduct,
  removeProduct,
  addProduct,
};