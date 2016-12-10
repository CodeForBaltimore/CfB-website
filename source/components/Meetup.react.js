var React = require('react');
var meetUpActions = require("../actions/meetUp.actions.js")
var meetUpStore = require("../stores/meetUp.store.js")
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const meetupRow = { padding: "20px 5%", borderBottom:"1px solid #e5e5e6" }
const date = { color: "#5D5D5D" }
const meetupCalendar = { flex:1, maxWidth: "120px" }
const meetupCalContainer = { width: "100px", margin: "3px 20px 10px 0", border: "1px solid #c8c8c8", boxShadow: "0px 1px 3px rgba(195, 193, 193, 0.8)", textAlign: "center", float: "left" }
const meetupMonth = { background: "#f5931e", color: "#FFFFFF", fontSize: "24px" }
const meetupCalBody = { paddingBottom: "5px" }
const meetupDay = { fontSize: "36px" }
const meetupWeekday = { fontSize: "14px", marginTop: "-5px" }
const description = { textAlign:"left", color: "#5D5D5D", padding: "10px 0", maxHeight: "100px", fontSize: "1.1em", position: "relative", overflow: "hidden" }
const title ={ color: "#5D5D5D", padding: "10px 0", maxHeight: "123.5px", fontSize: "1.5em", position: "relative", overflow: "hidden" }
const rsvp = { display: "block", fontSize: "13px", margin: "0 0 10px", zIndex: 2, position: "relative" }
const rsvpA = { background: "#FFFFFF", padding: "5px 10px", borderRadius: "3px", textDecoration: "none", border: "1px solid #e0393e", color: "#e0393e"}
const rsvpCount = { color: "#5D5D5D", marginLeft: "10px" }
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
        <Row style={meetupRow}>
          <Col xs={3} md={5} >
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
          </Col>

          <Col xs={8} md={6}  className="pull-right">
              <div style={title}> {this.state.name} </div>
              <div style={description} dangerouslySetInnerHTML={{__html: this.state.eventDescription}}></div>

          </Col>
          <Col xs={12} md={12} >
            <Row >
              <Col xs={12}  style={rsvpCount}>{this.state.yesRsvpCount} RSVPs</Col>
            </Row><br /><Row>
              <Col xs={12} >
                <a  style={rsvpA} href={"https://www.meetup.com/Code-for-Baltimore/events/"+this.state.nextEvent} data-event={this.state.nextEvent}>RSVP on Meetup.com</a>
              </Col>
            </Row>
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
