var React = require('react');

var TodoSearch = React.createClass({

    render: function () {
        return (
            <div className="container__header">
            <input type='text' placeholder="Search Todos"/>
            <input type='checkbox'> Todos Completed</input>
            </div>
        );
    }


});


module.exports = TodoSearch;