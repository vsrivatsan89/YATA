var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Todo = React.createClass({

    render: function () {
      
        return (
            <div>
            <input type='checkbox' ref='inputbox' onClick={this.handleOnClick}/> {this.props.todo.description}
            </div>
        );
    },
    handleOnClick: function(e){

        e.preventDefault();
       var {dispatch,todo} = this.props;

       dispatch(actions.toggleTodo(todo.id));




    }


});


module.exports = connect()(Todo);