var React = require("react");
var TodoSearch = require("components/TodoSearch");
var TodoAdd = require("components/TodoAdd");
var TodoList = require("components/TodoList");


var TodoApp = React.createClass(
{
    render: function(){
        return (
            
            <div>

            <h1 className="page-title">Yet Another Todo App</h1>
            <div className = "row">

            <div className="columns small-centered medium-6 container">
                        <TodoSearch/>
                        <TodoList/>
                        <TodoAdd/>
            </div>
   
            </div>

            </div>

        );
    }
}

);

module.exports = TodoApp;