function relogio () {
  document.getElementsByTagName("h1")[0].style.fontSize = "4vw";
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;
  
  function getTimeFromSecond (segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC'
  });
}
  
function iniciaRelogio() {
   timer = setInterval(function() {
    segundos++
    relogio.innerHTML = getTimeFromSecond(segundos);
  }, 1000);
}
//usando documentação:

document.addEventListener('click', function(e) {
  const el = e.target;
  
  if(el.classList.contains('start')){
    relogio.classList.remove('pausado');
     clearInterval(timer);
     iniciaRelogio();
     console.log('Você Iniciou o Timer');
  }
  if(el.classList.contains('stop')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
    console.log('Você Zerou o Timer');
  }
  if(el.classList.contains('pause')){
    clearInterval(timer);
    relogio.classList.add('pausado');
    console.log('Você Pausou o Timer');
  }  
});
}
relogio();
//fazendo na mão:
// const iniciar = document.querySelector('.start');
// const pausar = document.querySelector('.pause');
// const parar = document.querySelector('.stop');

// iniciar.addEventListener('click', function(event) {
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   iniciaRelogio();
//   alert('Você Iniciou o Timer');        
// });

// pausar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   relogio.classList.add('pausado');
//   alert('Você Pausou o Timer');
// });

// parar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//   alert('Você Zerou o Timer');
  
// });