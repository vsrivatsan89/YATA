var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({

    render: function () {
        return (
            <div className="container__header">
            <input type='text' placeholder="Search Todos"/>
            <input type='checkbox' ref='filterCheckBox' onClick={this.handleOnClick}/><label>Completed Tasks</label>
            </div>
        );
    },
    handleOnClick: function(){
        var {dispatch} = this.props;
        dispatch(actions.toggleFilter());
       
    }


});


module.exports = connect()(TodoSearch);