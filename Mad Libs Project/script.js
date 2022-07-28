var form = document.getElementById('Madlibs')
console.dir(form)
form.onsubmit = function(event) {
  event.preventDefault()
  console.log(elements)
  var elements = event.target.elements
  document.getElementById('Adjective1').innerHTML = elements.Adjective1.value
  document.getElementById('Noun1').innerHTML = elements.Noun1.value
  document.getElementById('Adjective2').innerHTML = elements.Adjective2.value
  document.getElementById('Noun2').innerHTML = elements.Noun2.value
}
