var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

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
        var {dispatch} = this.props;
        e.preventDefault();  
        var textinputbox = this.refs.todoinput;
        var todotext = textinputbox.value;

        if(todotext.length == 0)
        return;

        
        dispatch(actions.addTodo(todotext));
     
        textinputbox.value = '';
    },
    


});


module.exports = connect()(TodoAdd);