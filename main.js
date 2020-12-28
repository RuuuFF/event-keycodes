const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key}
      <small>event.key</small>
    </div>
    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `
});

// ${event.key === " " ? "Space" : event.key}
// "event.key" é igual à " "? Se sim, retorne "Space", se nao, "event.key".


// "Simular" disparos de eventos
// https://stackoverflow.com/questions/596481/is-it-possible-to-simulate-key-press-events-programmatically