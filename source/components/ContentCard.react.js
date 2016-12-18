var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const headerStyle ={
  marginTop:"20px",
  marginBottom:"0px",
  fontSize:"2em",
  color:"#3d5a6c",
  fontFamily:"Futura",
  fontWeight: 'bold'
}

const subHeaderStyle ={
  fontFamily:"sans-serif",
  fontWeight: 'lighter',
  fontSize:"1.5em",
  color:"#6d6865"
}

const footerStyle={
  position:"absolute",
  bottom:"25px",
  fontSize:"0.8em",
  color:"#333333"
}
const cardStyle ={
  backgroundColor:"#fdf9f6",
  padding:"1em",
  minHeight:"100px",
  height:"auto",
  marginBottom:"30px"
}

const barStyle={
  backgroundColor:"#FFAE64",
  width:"100%",
  height:"5px"
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

    headerStyle["textAlign"] = this.props.align;
    subHeaderStyle["textAlign"] = this.props.align;

    return (

        <div style={cardStyle}>
        <Row>
          <Col sm={5} xs={12} className={this.props.align =="right" ? "pull-right" :"pull-left" }>
            <Row><Col xs={12} style={headerStyle}>{this.props.headerText}</Col> </Row>
            <Row><Col xs={12} style={subHeaderStyle}>{this.props.subHeaderText}</Col> </Row>
          </Col>

          <Col sm={7} xs={12} style={headerStyle} className={this.props.align =="right" ? "pull-left" :"pull-right" }>
              {this.props.headerIcons}
          </Col>
        </Row>

          {this.props.showBar ?
            <Row style={barStyle}>
              <Col xs={12} ><br /></Col>
            </Row>
            :
            <Row></Row>
          }
          <Row>
            <Col xs={12}>
              {this.props.content}
            </Col>
          </Row>
          {this.props.footerText != undefined ?
          <Row style={footerStyle}><Col xs={12} >{this.props.footerText}</Col> </Row>
          : undefined }

        </div>


    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = NAME;
