export const addToCart = (payload) => {
  return {
    type: "add",
    payload: payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: "remove",
    payload: payload,
  };
};
export const increaseQty = (payload) => {
  return {
    type: "increase",
    payload: payload,
  };
};
export const decreaseQty = (payload) => {
  return {
    type: "decrease",
    payload: payload,
  };
};
export const cleanCart = () => {
  return {
    type: "cleanCart",
  };
};
