$(document).ready(function(){
  console.log('ready')
 // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
  });

  // add circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 90, // since it's an ellipse
    stroke: 10,  // thickness
    color: '#636',
  });

  // update & render
  illo.updateRenderGraph();

})