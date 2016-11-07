var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

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
        <h1>{this.props.headerText}</h1>
        <Col xs={6} md={4}>
          <Image src="/imgages/CfB_Final.png" rounded />
        </Col>
        <p>{this.props.subHeaderText}</p>
      </Jumbotron>
    );
  }
});

module.exports = Header;
