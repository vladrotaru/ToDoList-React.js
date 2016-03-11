var React = require('react');
var $ = require('jquery');

var ToDoItem = React.createClass({
    render: function() {
        return (
            <div className="form-group input-group">
                <input className="form-control" type="text" name="item" value={this.props.itemText}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">{this.props.buttonText}</button>
                </span>
            </div>
        );
    }
});

var ToDoList = React.createClass({
    getInitialState: function() {
        return{

        };
    },
    render: function() {
        return (
        <div>
            <ToDoItem itemText={''} buttonText={'Add item'}/>
            
            <ToDoItem itemText={'Hi'} buttonText={'Delete'}/>
            
        </div>
        );
    }
});

module.exports = ToDoList;

