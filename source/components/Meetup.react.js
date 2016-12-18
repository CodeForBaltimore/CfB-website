var React = require('react');
var meetUpActions = require("../actions/meetUp.actions.js")
var meetUpStore = require("../stores/meetUp.store.js")
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const date = { color: "#3d5a6c" }
const meetupCalendar = { flex:1, maxWidth: "200px" }
const meetupCalContainer = {
  width: "100%",
  textAlign: "center",
  float: "left",
  backgroundColor:"#fdf9f6",
  border:"1px solid #3d5a6c"
}
const meetupMonth = { background: "#3d5a6c", color: "#fdf9f6", fontSize: "1.5em" }
const meetupCalBody = { paddingBottom: "5px" }
const meetupDay = { fontSize: "3em" }
const meetupWeekday = { fontSize: "1.2em", marginTop: "-5px" }
const description = {
  textAlign:"left",
  color: "#6d6865",
  maxHeight: "300px",
  fontSize: "2em",
  overflow: "hidden",
  textOverflow:"ellipsis",
  fontFamily:"sans-serif",
  fontWeight:"lighter",
  maxHeight:"100px"
}
const title ={
  color: "#3d5a6c",
  maxHeight: "123.5px",
  fontSize: "3em",
  overflow: "ellipsis",
  fontFamily:"Futura",
  fontWeight:"bold",
  textAlign:"left"
}

const rsvpA = {
  marginTop:"5px",
  textDecoration: "none",
  color: "#3d5a6c",
  maxHeight:"30px",
  textAlign:"left",
  fontFamily:"sans-serif",
  fontWeight:"normal",
  fontSize: "2em",
}
const rsvpCount = {
  color: "#3d5a6c",
  fontFamily:"sans-serif",
  textAlign:"left",
  fontSize: "2em",
}
const showMe = {border:"1px solid blue"}

var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
var weekday = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}

var Meetup = React.createClass({

  _getEvents:function() {
    console.log("component get events");
    var events = meetUpStore.getEvents()
    console.log(events);
    if (events.length > 0){
      var current = events[0]
      var d = toDateTime((current.time + current.utc_offset)/1000);
      this.setState({
        events:events,
        nextEvent:current.id,
        eventMonth:d.getMonth(),
        eventDay:d.getDate(),
        eventWeekday:d.getDay(),
        prettyDate:d.toDateString(),
        yesRsvpCount:current.yes_rsvp_count,
        eventDescription:current.description,
        name:current.name
      });
      console.log("state updated");

    }

  },

  //default API ----------------

  //getDefaultProps: function(){
  //    return null;
  //},

  getInitialState: function() {
    return ({
      events:{},
      nextEvent:"",
      eventMonth:"00",
      eventDay:"00",
      eventWeekday:"",
      prettyDate:"",
      yesRsvpCount:0,
      eventDescription:""
    })



  },
  //
  componentWillMount: function(){
    meetUpActions.fetchEvents()
  },
  //
  componentDidMount: function(){
    meetUpStore.addChangeListener(this._getEvents)
  },
  //
  //componentWillReceiveProps: function(){},

  //shouldComponentUpdate: function(){},

  //componentWillUpdate: function(){},

  render: function() {
      if (this.state.nextEvent.length > 0) {


        return (
        <Row >
          <Col xs={5} sm={4} md={3} >
            <center>
            <div style={meetupCalendar} className="pull-left">
              <div style={meetupCalContainer}>
                <div style={meetupMonth}>
                  {months[this.state.eventMonth]}
                </div>
                <div style={meetupCalBody}>
                  <div style={meetupDay}>
                    {this.state.eventDay}
                  </div>
                  <div style={meetupWeekday}>
                    {weekday[this.state.eventWeekday]}
                  </div>
                </div>
              </div>
            </div>
            </center>
          </Col>

          <Col xs={7} sm={8} md={9}  className="pull-left">
            <div style={title}> {this.state.name} </div>
            <div style={description} dangerouslySetInnerHTML={{__html: this.state.eventDescription}}></div>
          </Col>
          <Col xs={12} sm={8} md={9}  className="pull-right">
            <div style={rsvpA}>
              <a  style={{color:"#3d5a6c"}} href={"https://www.meetup.com/Code-for-Baltimore/events/"+this.state.nextEvent} data-event={this.state.nextEvent}>
                RSVP ON MEETUP.COM
                <img src="/images/Arrow_Blue.png" style={{height:"25px"}}/>
              </a>

            </div>
            <div style={rsvpCount}>
            {this.state.yesRsvpCount} RSVPs
            </div>
          </Col>

        </Row>)
      }else{
        return <Row></Row>
      }





  },

  //componentDidUpdate: function(){},
  //
  componentWillUnmount: function(){
    meetUpStore.removeChangeListener(this.getEvents())
  }

});

module.exports = Meetup;
