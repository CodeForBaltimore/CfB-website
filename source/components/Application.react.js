var React = require('react');
var Header = require('./Header.react');
var CoreContent = require('./CoreContent.react');


const appStyle = {
  backgroundColor:"#fdf9f6"
}

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
      <div style={appStyle} className="container-fluid">
        <center>
          <Header
            subHeaderText="Hack Local"
            headerText = "CODE FOR BALTIMORE"
            imgHeaderSrc = "/images/Banner.png"
            imgLogoSrc = "/images/CfB_Final.png"
            />
          <CoreContent />


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
