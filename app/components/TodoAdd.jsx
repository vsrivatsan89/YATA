var React = require('react');

var TodoAdd = React.createClass({

    render: function () {
        return (
            <div className="container__footer">
            <form onSubmit={this.onSubmit}>
            <input type='text' placeholder="Add Todo" ref="todoinput"/>
            <input type='submit' value="Add Todo" className="button expanded" />
            </form>
            </div>
        );
    },
    onSubmit: function(e){
        
        e.preventDefault();  
        var textinputbox = this.refs.todoinput;
        var todotext = textinputbox.value;
        var handleNewTodo = this.props.onNewTodo;
        handleNewTodo(todotext);
        textinputbox.value = '';
    },
    


});


module.exports = TodoAdd;