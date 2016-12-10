var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;


const headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

const imageStyle ={
  height: "auto",
  width: "110%",
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
            <img style={{width:"100%"}} src={this.props.imgLogoSrc} />
          </Col>
          <Col xs={8} md={8}>
            <h1>{this.props.headerText}</h1>
            <p style={{color:"#f5931e", fontWeight:"bold", fontSize:"2em"}}>{this.props.subHeaderText}</p>
          </Col>
        </Row>

      </Row>
    );
  }
});

module.exports = Header;
