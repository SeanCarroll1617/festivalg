window.addEventListener('load', myInit, true); function myInit() {
  randombg(); autofocus();
};

function randombg() {
  var random = Math.floor(Math.random() * 3);
  var bigSize = ["url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fda6fe0f7735e059acb12100dcaf0162&auto=format&fit=crop&w=1050&q=80')",
                 "url('https://images.unsplash.com/photo-1522717887140-b78153b59e52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8fb069ada83dab93921e2a5ab28e1b26&auto=format&fit=crop&w=1055&q=80')",
                 "url('https://images.unsplash.com/photo-1518245646578-c6de1ad9eabd?ixlib=rb-0.3.5&s=10247917bcd187f157eeecf781367371&auto=format&fit=crop&w=1050&q=80')",
               ];
  document.getElementById('bg').style.backgroundImage = bigSize[random];
}



// Autofocus searchbar
function autofocus() {
  document.getElementById('myInput').focus();
}

const formSubmit = document.getElementById("search_festivals");
formSubmit.addEventListener("submit", function(e){
	r
})