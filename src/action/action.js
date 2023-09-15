export const INS = () => {
  return {
    type: "increment",
  };
};
export const DEC = () => {
  return {
    type: "decrement",
  };
};
export const Change = (event) => {
  return {
    type: "change",
    event: event
  };
};
