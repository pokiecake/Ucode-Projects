var transact = document.getElementById('transact');
transact.onclick = function(event){
  event.preventDefault;
  exchange().transact('0815', 'yzXcxSzsHKYlwyRaQha8QEAbWkm1', 'e95Y6tKOvIS7CBlEdBn2UknzxMQ2', 1, 'Hi', () => {
    alert('Successful transaction');
  }, (status, response) => {
    alert(`${status} error: ${response}`);
  });
};
