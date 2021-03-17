const input = document.getElementById('input');
const buttonElement = document.getElementById('btn');
const output = document.getElementById('output');


//comment
buttonElement.addEventListener("click", function() {
  const num = parseInt(input.value);
  var str = "";
  for (let i = 0; i < num; i++) {
      str += "0";
    }
    output.innerHTML = `<p>${str}<p>`; 
});
  


