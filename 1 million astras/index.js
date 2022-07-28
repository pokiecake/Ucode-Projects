  var astras = '';
  var main = document.getElementById('main');
  var form = document.getElementById('form');
  var span = document.getElementById('span');
  console.dir(main);
  form.onsubmit = function(event){
    event.preventDefault();
    for (let i = 0;i < 1000000;i++){
      astras += 'dollar ';
    }
    //console.log(astras.length/('Astra '.length));
    span.innerHTML = astras;
    //astras = '';
//     exchange().userWithEmail('tony@adastraschool.org', '', 'GwZX5OnFzGUl0UlXH97EGIeW70p1', 20, 'Take my money', () => {
//     alert('Successful transaction')
// }, (status, response) => {
//     alert(`${status} error: ${response}`)
// })
  };
