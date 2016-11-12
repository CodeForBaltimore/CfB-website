var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const headerStyle ={
  fontSize:"1.5em",
  color:"#4e4e4e"
}

const footerStyle={
  position:"absolute",
  bottom:"25px",
  fontSize:"0.8em",
  color:"#f5931e"
}
const cardStyle ={
  backgroundColor:"#eee",
  padding:"1em",
  margin:"1em",
  borderRadius:"1em",
  minHeight:"200px"
}




var NAME = React.createClass({

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
      <Col md={4} xs={12}>
        <div style={cardStyle}>
        <Row><Col xs={12} style={headerStyle}>{this.props.headerText}</Col> </Row>
        <Row>
          <Col xs={12}>
            Content
          </Col>
        </Row>
        {this.props.footerText != undefined ?
        <Row style={footerStyle}><Col xs={12}>{this.props.footerText}</Col> </Row>
        : undefined }

        </div>

      </Col>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
