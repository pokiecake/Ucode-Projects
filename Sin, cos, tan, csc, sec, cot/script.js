function sine(x){
  xRad = x*Math.PI/180;
  return Math.sin(xRad);
}
function cosine(x){
  xRad = x*Math.PI/180;
  return Math.cos(xRad);
}
function tangent(x){
  xRad = x*Math.PI/180;
  return Math.tan(xRad);
}
function cosecant(x){
  return 1/sine(x);
}
function secant(x){
  return 1/cos(x);
}
function cotangent(x){
  return 1/tan(x);
}
alert(cosecant(90));
