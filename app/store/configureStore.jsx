var {todosReducer, filterReducer} = require('reducers');
var redux = require('redux');


export var configure = (initialState = {})=>{

var reducer = redux.combineReducers(
  {todos: todosReducer,
   showcompleted: filterReducer});

var store = redux.createStore(reducer,initialState,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
  
}
