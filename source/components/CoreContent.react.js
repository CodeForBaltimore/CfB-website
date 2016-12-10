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
      <Row style={{marginTop:"30px"}}>

      <Col md={6} xs={12}>

        <ContentCard
          headerText="MEETUPS"
          subHeaderText="what's up next?"
          align="left"
          content={meetupData}
        />

        <ContentCard
          headerText="PHOTOS"
          subHeaderText="see the awesome."
          align="left"
          content={photos}
          footerText="...Coming Soon"
        />


      </Col>

      <Col md={6} xs={12}>

        <ContentCard
          headerText="PROJECTS"
          subHeaderText="what's hot?"
          align="right"
          content={featured}
          footerText="...Coming Soon"
        />

        <ContentCard
          headerText="PARTNERS"
          subHeaderText="meet our friends"
          align="right"
          content=""
        />

        </Col>

        <Col md={6} xs={12}>

            <ContentCard
              headerText="Code For America"
              subHeaderText="our inspiration"
          align="right"
              content=""
            />

        </Col>

      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
