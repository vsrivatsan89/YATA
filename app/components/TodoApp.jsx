var React = require("react");
var TodoSearch = require("components/TodoSearch");
var TodoAdd = require("components/TodoAdd");
var TodoList = require("components/TodoList");


var TodoApp = React.createClass(
{
    render: function(){
        return (
            <div>
            <h1>Yet Another Todo App</h1>
            <TodoSearch/>
            <TodoList/>
            <TodoAdd/>
            </div>

        );
    }
}

);

module.exports = TodoApp;