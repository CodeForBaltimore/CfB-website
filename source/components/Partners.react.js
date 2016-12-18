var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const partner ={
  color: "#3d5a6c",
  maxHeight: "50px",
  fontSize: "2.5em",
  overflow: "ellipsis",
  fontFamily:"Futura",
  fontWeight:"lighter",
  textAlign:"right"
}


var Partners = React.createClass({

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
      <Row style={{padding:"15px"}}>

          <h1 style={partner}>Baltimore City Police</h1>
          <h1 style={partner}>Councilman Zeke Cohen</h1>
          <h1 style={partner}>Code For America</h1>


      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Partners;
