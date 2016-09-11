const initalState = {
    red: "red",
    blue: "blue",
    yellow: "yellow",
    purple: "purple",
    green: "green",
    orange: "orange",
    selected: "none"
};

const palletReducer = (state = initalState, action) =>{
  switch(action.type){
  case "SELECT_COLOR":
    var newSelected = Object.assign({}, state, {});
    changeAll.selected = action.color;
    return newSelected;
  case "ADD_COLOR":
    var allColors = Object.assign({}, state, {});
    const changeName = {};
    for(var colors in allColors){
      if(colors !== action.color){
        allColors.action.color = action.color;
        break;
      }
    }
    return allColors;
  default:
    return state;
  }
}

module.exports = palletReducer;