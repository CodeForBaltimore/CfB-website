var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;


const footerStyle = {
  fontSize:"2.7em",
  fontWeight: 'bold',
  color:"#333333",
  textAlign:"left",
  fontFamily:"Futura",
  marginTop:"2px",
  height:"50px"

}


var Footer = React.createClass({

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
      <Row style={footerStyle}>
        <center><a style={{color:"white"}} href="http://codeforbaltimore.org">codeforbaltimore.org</a></center>
      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Footer;
