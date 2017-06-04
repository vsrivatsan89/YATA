var {todoReducer} = require('reducers');
var redux = require('redux');


export var configure = (initialState = {})=>{

var reducer = redux.combineReducers({todos: todoReducer});

var store = redux.createStore(reducer,initialState,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
  
}
