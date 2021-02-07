const initalState2 = {
    counter: 0,
    data:[
      {
        picture:"",
        name:{title:"",first:"",last:""},
        email:"",
        dob:{age:"",date:""},
        gender:""}
      ]
  };
  
export function Reducers(state = initalState2, action) {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1,data: action.data};
      
      default:
        return state;
    }
  }
