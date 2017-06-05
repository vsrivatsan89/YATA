var React = require('react');
var Todo = require('components/Todo');
var {connect} = require('react-redux');

var TodoList = React.createClass({

    render: function () {
        var listOfTodos = this.props.todos;
        var showcompleted = this.props.showcompleted;

       function displayTodos(){
           if(listOfTodos.length === 0){
               return(
                
                <h4>No Todos</h4>
            
               )
           }else{

              
                var Todos = listOfTodos.map(function(todo){
                       
                       if(showcompleted){
                           //show only the completed todos
                           if(todo.completed)
                           return <Todo todo={todo}/>
                       }else{
                            if(!todo.completed)
                                return <Todo todo={todo}/>
                       }
                       

                      
                 });

                
                 return Todos;
               

    
           }

           
       }

       return (
           <div className="container__content">
           {displayTodos()}
           </div>
           );

      
    }


});


module.exports = connect((state)=>{
    return {
        todos : state.todos,
        showcompleted: state.showcompleted
    }
})(TodoList);