function store(field){
     var field= document.getElementById(field);
     localStorage.setItem(field, field.value);
     testReplace();
   }

function testReplace() {
  document.getElementById("testreplace").innerHTML = localStorage.getItem("wnumber");
}
