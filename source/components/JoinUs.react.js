var React = require('react');

const joinStyle ={
  color:"#6d6865",
  fontSize:"1.5em",
  fontWeight:"lighter",
  fontFamily:"Futura"
}

var Join = React.createClass({

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  //getInitialState: function() {},
  //
  //componentWillMount: function(){},
  //
  //componentDidMount: function(){},
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div style={joinStyle}>
        We are civic hackers interested in contributing to open data and open source in Baltimore.
        <br />
        All skills levels and skill types are welcome, coders need designers, project managers, champions, and data ninjas.


      </div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Join;
