var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('components/TodoApp');
var {Provider } = require('react-redux');
var store = require('configurestore');
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store.configure()}>
    <TodoApp/>
    </Provider>
 ,
  
  document.getElementById('app')

);
