var initialState = [
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"]
];


const colorsReducer = (state = initialState, action) => {
  // console.log(state);
  // console.log(action);
  switch(action.type){
    case "SET_COLOR":
      const newState = state.concat();
      newState[action.x][action.y] = action.color
      return newState;
    case "CLEAR_COLOR":
      return initialState;
    default:
      return state;
  }
};

module.exports = colorsReducer;