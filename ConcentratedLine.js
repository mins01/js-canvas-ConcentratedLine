var ConcentratedLine = (function(){
  return {
    "radial":function(canvas,x,y,multi,r){
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(x, y);
      // ctx.translate(x, y);

      var deg = (360/multi);
      for(var i=0,m=multi;i<m;i++){
        // var deg = (360/multi)*(i+1);
        // console.log(deg);
        ctx.rotate(deg*Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(r,0);
        ctx.closePath();
        ctx.stroke();
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.restore();
    }
  }
})()
