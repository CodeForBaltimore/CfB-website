var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Button = require('react-bootstrap').Button;
var Form = require('react-bootstrap').Form;
var slackRest = require('../utilities/slackRest.js');



const style ={
  color: "#3d5a6c",
  maxHeight: "50px",
  fontSize: "2.5em",
  overflow: "ellipsis",
  fontFamily:"Futura, Helvetica, 'Open Sans', sans-serif",
  fontWeight:"lighter",
  textAlign:"right"
}


var Slack = React.createClass({

  getValidationState() {

    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var valid = pattern.test(this.state.value);



    if (valid) return 'success';
    else return 'warning';
  },

  handleChange(e) {

    this.setState({ value: e.target.value });
  },

  handleSubmit:function(e) {
    console.log("handleSubmit");

    if(this.getValidationState === 'success'){
      console.log("submit to slackRest");
      slackRest.postNewEmail(this.state.value, function (data) {
        console.log(data)

      })

    }
    e.preventDefault();
  },

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  getInitialState: function() {
    return {
            value: ''
          };
  },
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
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="slackEmail"
            validationState={this.getValidationState()}
          >
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter your email"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
          </FormGroup>
          <button className="btn-slack btn" onClick={this.handleSubmit}>Join Slack</button>
        </Form>

      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Slack;
