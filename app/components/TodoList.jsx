var React = require('react');
var Todo = require('components/Todo');

var TodoList = React.createClass({

    render: function () {
        var listOfTodos = this.props.todos;

       function displayTodos(){
           if(listOfTodos.length === 0){
               return(
                
                <h4>No Todos</h4>
            
               )
           }else{

              
                var Todos = listOfTodos.map(function(todo){
                       
                      return <Todo todoText={todo}/>
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


module.exports = TodoList;