var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var Image = require('react-bootstrap').Image;

var headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

var Header = React.createClass({

  getDefaultProps: function () {
    return {
      text: 'Default header'
    };
  },

  render: function () {
    return (
      <Jumbotron>
        <Row>
          <Col xs={12} md={4}>
            <img style={{width:"100%"}} src={this.props.imgSrc} />
          </Col>
          <h1>{this.props.headerText}</h1>
          <Col xs={12} md={4}>
            <p>{this.props.subHeaderText}</p>
          </Col>
        </Row>

      </Jumbotron>
    );
  }
});

module.exports = Header;
