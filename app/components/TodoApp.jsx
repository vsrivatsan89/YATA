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
                        <TodoList todos={this.state.todos}/>
                        <TodoAdd onNewTodo={this.handleNewTodo} />
                       
            </div>
   
            </div>

            </div>

        );
    },
    handleNewTodo: function(todotext){

        
      
        var todos = [...this.state.todos,todotext];
        
        this.setState({todos:todos})
    },
    getInitialState:function(){
        return {
        todos: []

    }
    }
}

);

module.exports = TodoApp;