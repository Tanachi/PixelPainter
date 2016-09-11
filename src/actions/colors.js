var initialState = [
  colors:[
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"],
    ["White","White","White","White","White"]
  ],
  chosenColor: "White"
];


const colorReducer = (state = initialState, action) => {
  // console.log(state);
  // console.log(action);
  switch(action.type){
    case "SET_COLOR":
      const newState = state.concat(action.data);
      return newState;
    case "SELECT_COLOR":
      const targetIndex = action.id;
      if(targetIndex < 0 || targetIndex >= state.length){
        console.log("Something is wrong");
        return state;
      }
      const targetTask = state[targetIndex];
      const newTasks = Object.assign({}, targetTask, {status: action.status});
      return [].concat(state.slice(0, targetIndex), newTasks, state.slice(targetIndex + 1));
    default:
      return state;
  }
};

module.exports = taskReducer;