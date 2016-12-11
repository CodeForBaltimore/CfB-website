var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var ContentCard = require('./ContentCard.react');
var Meetup = require('./Meetup.react');
var JoinUs = require('./JoinUs.react');
var Featured = require('./Featured.react');
var Photos = require('./Photos.react');


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
    var joinForm = <JoinUs />
    var photos = <Photos />
    var featured = <Featured />
    var connectIcons = (
      <Row>
        <img className="pull-right" style={iconStyle} src="/images/Github.png"/>
        <img className="pull-right" style={iconStyle} src="/images/Slack.png"/>
        <img className="pull-right" style={iconStyle} src="/images/Twitter.png"/>

      </Row>

    )







    return (
      <Row style={{marginTop:"30px"}}>

      <Col xs={12}>
          <ContentCard
            headerText="CONNECT"
            subHeaderText="be part of our tribe."
            align="left"
            content={JoinUs}
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
          headerIcons={<Row><img className="pull-right" style={iconStyle} src="/images/Meetup.png"/></Row>}
        />

        <ContentCard
          headerText="PHOTOS"
          subHeaderText="see the awesome."
          align="left"
          content={photos}
          footerText="...Coming Soon"
          headerIcons={<Row><img className="pull-right" style={iconStyle} src="/images/Instagram.png"/></Row>}
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
          showBar={true}
          align="right"
          content=""
        />

        </Col>

        <Col md={6} xs={12}>

            <ContentCard
              headerText="Code of Conduct"
              subHeaderText="our guide"
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
