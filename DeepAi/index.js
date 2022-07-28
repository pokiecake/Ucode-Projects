'use strict';
//I'm not sure whether I'm allowed to use DeepAi anymore as this was a project my coding teacher allowed us to do temporarily. 
//I think he had to ask permission to use the AI. I don't know whether that still holds true, but I'm removing some code just to be safe so this doesn't work.
deepai.setApiKey('');
var reveal = document.getElementById('reveal');
reveal.onsubmit = function(event){
  event.preventDefault();
const getFace = async () => {
  console.log('running');
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPLvMShCtohzKSurQ67E75Hx93vESMhC_mVa5qM4wJtzdcNcGzA';
  const img = document.getElementById('img');
  img.src = url;
  //const resp = await deepai.callStandardApi('facial-recognition', {
  image:url
});
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPLvMShCtohzKSurQ67E75Hx93vESMhC_mVa5qM4wJtzdcNcGzA
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPLvMShCtohzKSurQ67E75Hx93vESMhC_mVa5qM4wJtzdcNcGzA
console.log(resp);

const boundingBox = resp['output']['faces']['0']['bounding_box'];
const faceBox = document.getElementById("face-box");
faceBox.style.left = String(boundingBox[0]) + 'px';
faceBox.style.top = String(boundingBox[1]) + 'px';
faceBox.style.width = String(boundingBox[2]) + 'px';
faceBox.style.height = String(boundingBox[3]) + 'px';
faceBox.style.border = '4px solid black';

}
}
