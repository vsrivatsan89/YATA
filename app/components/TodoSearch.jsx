var React = require('react');

var TodoSearch = React.createClass({

    render: function () {
        return (
            <div>
            <input type='text' placeholder="Search Todos"/>
            <input type='checkbox'>Completed</input>
            </div>
        );
    }


});


module.exports = TodoSearch;