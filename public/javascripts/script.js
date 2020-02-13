function store(field){
     var item = document.getElementById(field);
     localStorage.setItem(field, item.value);
}


function makeHost(id) {
  host = new Host (7);
  console.log('made it to makehost');
}


class Host {
  constructor (number) {
    this.idNumber = number;
  }
  static getNumberStudentGuests () {
    return 6;
  }
  static getName () {
    return "Mike Speiser";
  }
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
    document.getElementById('warningtext').innerHTML = "Sorry, you can only check in a total of 4 guests per room.";
    return false;
  }
  else {
    return true;
  }
}

function fillNumberguests () {
  document.getElementById('nameheader').innerHTML += host.getName;
}

function fillGuestinfo () {
  //document.getElementById('nameheader').innerHTML += host.getName;
  host.numberStudentGuests = 10;
  for (i=0; i < host.numberStudentGuests; i++) {
    document.getElementById('studentInfoList').innerHTML += "<li><p class='wnumberInput'>W</p> <input id='wnumber' class='wnumberInput' type='number' placeholder='12345678' step='1' min='10000000' max='99999999'/></li>"
  }
  document.getElementById('nonStudentInfoDiv').innerHTML = {
  }
}
