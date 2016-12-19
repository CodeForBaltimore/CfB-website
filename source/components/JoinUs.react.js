var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;


const joinStyle ={
  color:"#6d6865",
  fontSize:"1.5em",
  fontWeight:"lighter",
  fontFamily:"Futura"
}

const altJoinStyle ={
  color:"#6d6865",
  fontSize:"3em",
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
      <div >

        <Col style={joinStyle} xsHidden={true} smHidden={true} xs={12}>

                We are civic hackers interested in contributing to open data and open source in Baltimore.<br />
                All skill levels and types are welcome; coders need designers, project managers, champions, and data ninjas.


        </Col>

        <Col style={altJoinStyle} mdHidden={true}  lgHidden={true} xs={12}>

                We are civic hackers interested in contributing to open data and open source in Baltimore.<br />
                All skill levels and types are welcome; coders need designers, project managers, champions, and data ninjas.
        </Col>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Join;
