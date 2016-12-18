var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const wrapper={
  maxHeight:"400px",
  overflow: "hidden"
}

const title ={
  color: "#3d5a6c",
  maxHeight: "50px",
  fontSize: "3em",
  fontFamily:"Futura",
  fontWeight:"bold",
  textAlign:"left"
}

const description ={
  textAlign:"left",
  color: "#fdf9f6",
  fontSize: "1.2em",
  fontFamily:"sans-serif",
  fontWeight:"lighter",
  overflow: "ellipsis"
}

const linkOut ={
  textAlign:"right",
  color: "#fdf9f6",
  fontSize: "2.5em",
  fontFamily:"Futura",
  fontWeight:"normal",
}




var Conduct = React.createClass({

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
        <Col xs={12} >
          <Row style={linkOut}>
            <a  style={{color:"#3d5a6c"}} href="https://github.com/CodeForBaltimore/CodeOfConduct" >
              READ ON GITUB
              <img src="/images/Arrow_Blue.png" style={{height:"25px"}}/>
            </a>
          </Row>
        </Col>
      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Conduct;
