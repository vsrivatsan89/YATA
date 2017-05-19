var React = require('react');

var TodoAdd = React.createClass({

    render: function () {
        return (
            <div className="container__footer">
            <input type='text' placeholder="Add Todo"/>
            <input type='button' value="Add Todo" className="button expanded"/>
            </div>
        );
    }


});


module.exports = TodoAdd;