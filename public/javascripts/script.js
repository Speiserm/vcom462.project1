function store(field){
     var item = document.getElementById(field);
     localStorage.setItem(field, item.value);
}


function makeHost(id) {
  var host = new Host (id);
  console.log('made it to makehost');
}


function Host (number) {
  this.idNumber = number;
  this.firstName = "Mike";
  this.lastName = "Speiser";
  this.getName = function () {return this.firstName + " " + this.lastName;};
}

function Person (number, first, last) {
  this.idNumber = number;
  this.firstName = first;
  this.lastName = last;
  this.getName = function () {return this.firstName + " " + this.lastName;};
  this.overnight = new Boolean(false);
  this.isOvernight = function () {return this.overnight;};
}

function increase (field) {
  if(checkMaxGuests() && parseInt(document.getElementById(field).innerHTML) <= 3) {
    document.getElementById(field).innerHTML = parseInt(document.getElementById(field).innerHTML)+1;
  }
}

function decrease (field) {
  if(parseInt(document.getElementById(field).innerHTML) >= 1) {
    document.getElementById(field).innerHTML = parseInt(document.getElementById(field).innerHTML)-1;
  }
}

function checkMaxGuests () {
  if(((parseInt(document.getElementById('studentCount').innerHTML)) + (parseInt(document.getElementById('nonStudentCount').innerHTML)) >=4)) {
    return false;
  }
  else {
    return true;
  }
}

function fillPage () {
  document.getElementById('nameheader').innerHTML += Host.getName;
}
