var React = require('react');

var Todo = React.createClass({

    render: function () {
      
        return (
            <div>
            <input type='checkbox'/> {this.props.todoText}
            </div>
        );
    }


});


module.exports = Todo;