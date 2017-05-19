var React = require('react');
var Todo = require('components/Todo');

var TodoList = React.createClass({

    render: function () {
        return (
            <div className="container__content">
            <Todo/>
            </div>
        );
    }


});


module.exports = TodoList;