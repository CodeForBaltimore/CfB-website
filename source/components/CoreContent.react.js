var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var ContentCard = require('./ContentCard.react');
var Meetup = require('./Meetup.react');
var JoinUs = require('./JoinUs.react');
var Featured = require('./Featured.react');
var Photos = require('./Photos.react');



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
      <Row>
      
        <ContentCard
          headerText="Our Next Meetup"
          content={meetupData}
        />

        <ContentCard
          headerText="Event Photos"
          content={photos}
          footerText="...Coming Soon"
        />

        <ContentCard
          headerText="Featured Projects"
          content={featured}
          footerText="...Coming Soon"
        />

        <ContentCard
          headerText="Code For America"
          content=""
        />

      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
