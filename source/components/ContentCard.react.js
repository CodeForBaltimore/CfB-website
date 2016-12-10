var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const headerStyle ={
  fontSize:"2em",
  color:"#fdf9f6",
  fontFamily:"Futura",
  fontWeight: 'medium'
}

const subHeaderStyle ={
  fontFamily:"sans-serif",
  fontWeight: 'lighter',
  fontSize:"1.5em",
  color:"#fdf9f6"
}

const footerStyle={
  position:"absolute",
  bottom:"25px",
  fontSize:"0.8em",
  color:"#fdf9f6"
}
const cardStyle ={
  backgroundColor:"#f4921f",
  padding:"1em",
  minHeight:"200px",
  height:"auto",
  marginBottom:"30px"
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

    headerStyle["textAlign"] = this.props.align;
    subHeaderStyle["textAlign"] = this.props.align;

    return (

        <div style={cardStyle}>
          <Row><Col xs={12} style={headerStyle}>{this.props.headerText}</Col> </Row>
          <Row><Col xs={12} style={subHeaderStyle}>{this.props.subHeaderText}</Col> </Row>

          <Row>
            <Col xs={12}>
              {this.props.content}
            </Col>
          </Row>
          {this.props.footerText != undefined ?
          <Row style={footerStyle}><Col xs={12} >{this.props.footerText}</Col> </Row>
          : undefined }

        </div>


    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
