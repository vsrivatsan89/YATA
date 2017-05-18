var React = require('react');

var TodoAdd = React.createClass({

    render: function () {
        return (
            <div>
            <input type='text' placeholder="Add Todo"/>
            </div>
        );
    }


});


module.exports = TodoAdd;