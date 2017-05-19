var React = require('react');
var Todo = require('components/Todo');

var TodoList = React.createClass({

    render: function () {
        return (
            <div>
            <Todo/>
            </div>
        );
    }


});


module.exports = TodoList;