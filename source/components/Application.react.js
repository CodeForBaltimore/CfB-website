var React = require('react');
var Header = require('./Header.react');
var Navbar = require('./Navbar.react');



var Application = React.createClass({

  //default API
  //getDefaultProps: function(){
  //    return null;
  //},
  //getInitialState: function() {
  //
  //},
  //
  //componentWillMount: function(){
  //
  //},
  //
  //componentDidMount: function(){
  //
  //},
  //
  //componentWillReceiveProps: function(){
  //
  //},
  //
  //shouldComponentUpdate: function(){
  //
  //},
  //
  //componentWillUpdate: function(){
  //
  //},

  render: function() {
    return (
      <div className="container-fluid">
        <center>
          <Header
            subHeaderText="Hack Local"
            headerText = "Code for Baltimore"
            imgSrc = "/images/CfB_Final.png"
            />
          <Navbar />


          <div style={{height:"1000px"}}><br /></div>

        </center>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){
  //
  //},
  //
  //componentWillUnmount: function(){
  //
  //}

});

module.exports = Application;
