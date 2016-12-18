var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const featuredImage ={
  width:"100%",
  height:"auto",
  overflow:"hidden"

}

const secondImage ={
  height:"50%",
  width:"auto",
  overflow:"hidden"

}
const thirdImage ={
  height:"50%",
  width:"auto",
  overflow:"hidden",
  marginTop:"5px"

}

const squareImage={
  width:"100%",
  height:"auto",
}

const wrappers ={
  margin:"0px",
  padding:"5px"
}

var Photos = React.createClass({

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
    return (
      <Row style={{padding:"15px"}}>

        <Col xs={4} style={wrappers}>
          <div style={secondImage}>
            <a target="_blank" href="https://www.facebook.com/pg/CodeForBaltimore/photos/">
              <img src="/images/image2.jpg" style={squareImage}/>
            </a>
          </div>
          <div style={thirdImage}>
          <a target="_blank" href="https://www.facebook.com/pg/CodeForBaltimore/photos/">
            <img src="/images/image3.jpg" style={squareImage}/>
          </a>
          </div>

        </Col>

        <Col xs={8} style={wrappers}>
          <div style={featuredImage}>
          <a target="_blank" href="https://www.facebook.com/pg/CodeForBaltimore/photos/">
            <img src="/images/mainImage.jpg" style={squareImage}/>
          </a>
          </div>

        </Col>

      </Row>
    );

  }

  //,

  //componentDidUpdate: function(){},
  //
  //componentWillUnmount: function(){}

});

module.exports = Photos;
