var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var ContentCard = require('./ContentCard.react');
var Meetup = require('./Meetup.react');
var JoinUs = require('./JoinUs.react');
var Featured = require('./Featured.react');
var Photos = require('./Photos.react');

const rowStyle={
  maxHeight:"500px"
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
    var meetupData = <Meetup />
    var joinForm = <JoinUs />
    var photos = <Photos />
    var featured = <Featured />

    return (
      <div className='container-fluid'>
      <Row style={rowStyle}>
        <ContentCard
          headerText="Join Us"
          content={joinForm}
        />
        <ContentCard
          headerText="Next Meetup"
          content={meetupData}
        />
        <ContentCard
          headerText="Featured Projects"
          content={featured}
          footerText="...Coming Soon"
        />
      </Row>

      <Row style={rowStyle}>
        <ContentCard
          headerText="Event Photos"
          content={photos}
          footerText="...Coming Soon"
        />
      </Row>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
