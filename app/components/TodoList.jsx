var React = require('react');
var Todo = require('components/Todo');

var TodoList = React.createClass({

    render: function () {
        return (
            <div>
            <h2> This will be the TodoList component</h2>
            <Todo/>
            </div>
        );
    }


});


module.exports = TodoList;