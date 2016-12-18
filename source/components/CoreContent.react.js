var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var ContentCard = require('./ContentCard.react');
var Meetup = require('./Meetup.react');
var Partners = require('./Partners.react');
var JoinUs = require('./JoinUs.react');
var Featured = require('./Featured.react');
var Photos = require('./Photos.react');
var Conduct = require('./Conduct.react')


const iconStyle = {
  maxHeight:"50px",
  minHeight:"20px",
  height:"auto",
  margin:"10px",
  marginLeft:"7%",
  marginRight:"5%"
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
    var partners = <Partners />
    var photos = <Photos />
    var joinus = <JoinUs />
    var featured = <Featured />
    var connectIcons = (
      <Row>
        <a href="" target="_blank">
          <img className="pull-right" style={iconStyle} src="/images/Meetup.png"/>
        </a>
        <a href="https://github.com/CodeForBaltimore" target="_blank">
          <img className="pull-right" style={iconStyle} src="/images/github.png"/>
        </a>
        <a href="" target="_blank">
          <img className="pull-right" style={iconStyle} src="/images/slack.png"/>
        </a>
        <a href="https://twitter.com/codeforbmore" target="_blank">
          <img className="pull-right" style={iconStyle} src="/images/twitter.png"/>
        </a>
        <a href="https://www.facebook.com/CodeForBaltimore/" target="_blank">
          <img className="pull-right" style={iconStyle} src="/images/facebook.png"/>
        </a>

      </Row>

    )

    var conduct = <Conduct />







    return (
      <Row style={{marginTop:"30px"}}>

      <Col xs={12}>
          <ContentCard
            headerText="CONNECT"
            subHeaderText="be part of our tribe."
            showBar={true}
            align="left"
            content={joinus}
            headerIcons={connectIcons}
          />
      </Col>

      <Col md={6} xs={12}>

        <ContentCard
          headerText="MEETUPS"
          subHeaderText="what's up next?"
          showBar={true}
          align="left"
          content={meetupData}
        />

        <ContentCard
          headerText="PHOTOS"
          subHeaderText="see the awesome."
          align="left"
          content={photos}

          headerIcons={<Row></Row>}
        />

        <ContentCard
          headerText="Code of Conduct"
          subHeaderText="our guide"
          align="left"
          content={conduct}
        />


      </Col>

      <Col md={6} xs={12}>

        <ContentCard
          headerText="PROJECTS"
          subHeaderText="what's hot?"
          align="right"
          content={featured}
        />

        <ContentCard
          headerText="PARTNERS"
          subHeaderText="meet our friends"
          showBar={true}
          align="right"
          content={partners}
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
