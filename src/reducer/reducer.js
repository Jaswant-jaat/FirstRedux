const initialState = 0;
const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "change":
      state = action.event.target.value;
      return state;
    default: 
      return state;
  }
};

export default changeNumber;
