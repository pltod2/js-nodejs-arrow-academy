import React, { Component } from "react";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    c.height = 1000;
    c.width = 2000;


    var chinese = "абвгдежзийклмнопрст";
    chinese = chinese.split("");
    var font_size = 10;
    var columns = c.width/font_size; 
    var drops = [];

    for(var x = 0; x < columns; x++)
      drops[x] = 1; 


    function draw()
    {
      
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, c.width, c.height);
      
      ctx.fillStyle = "#0F0"; 
      ctx.font = font_size + "px arial";

      for(var i = 0; i < drops.length; i++)
      {
        
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
        

        drops[i]++;
      }
    }

    setInterval(draw, 33);
  }

  render() {
    const styles = {
      marginLeft: "-320px",
      marginTop: "-200px",
      maxHeight: "2000px",
      maxWidth: "2000px"
    };
    return (
      <canvas id="c" style={styles}>

      </canvas>
    );
  }
}
