var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;


const headerStyle = {
  fontSize:"2.7em",
  fontWeight: 'bold',
  color:"#333333",
  marginRight:"30px",
  textAlign:"left",
  fontFamily:"Futura",
  marginBottom:"2px"

}

const altHeaderStyle ={
  fontFamily:"Futura",
  fontSize:"2.5em",
  fontWeight: 'medium',
  color:"#fdf9f6",
  marginRight:"30px",
  textAlign:"center"
}

const subHeaderStyle={
  fontSize:"2.5em",
  fontWeight: 'lighter',
  color:"#f4921f",
  textAlign:"left",
  fontFamily:"sans-serif",
  marginTop:"0px"
}

const imageStyle ={
  height: "auto",
  width: "100%",
}

var Header = React.createClass({

  getDefaultProps: function () {
    return {
      text: 'Default header'
    };
  },

  render: function () {
    return (
      <Row style={{height:"auto"}}>
        <img style={imageStyle} src={this.props.imgHeaderSrc} />
        <Row style={{top:"0px",position:"absolute"}}>
          <Col xs={4} md={4}>
            <img style={{width:"100%",margin:"5px"}} src={this.props.imgLogoSrc} />
          </Col>
          <Col xsHidden={true} md={7} className="pull-right">
            <h2 style={headerStyle}>{this.props.headerText}</h2>
            <h3 style={subHeaderStyle}>{this.props.subHeaderText}</h2>
          </Col>
        </Row>
        <Row>
          <Col mdHidden={true} smHidden={true} lgHidden={true} xs={12}>
            <h2 style={altHeaderStyle}>{this.props.headerText}</h2>
          </Col>
        </Row>

      </Row>
    );
  }
});

module.exports = Header;
