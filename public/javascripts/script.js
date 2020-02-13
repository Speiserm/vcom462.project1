function store(field){
     var item = document.getElementById(field);
     localStorage.setItem(field, item.value);
}


function makeHost(id) {
  host = new Host (7);
  console.log('made it to makehost');
}


var host = new Object();
{
  host.idNumber = 00000000;
  host.firstName = "Mike";
  host.lastName = "Speiser";
  host.getName = getName(host.firstName, host.lastName);
  host.numberguests = 0;
}

function getName (firstName, lastName) {
  return firstName + " " + lastName;
}

 var guests = {firstName:"John", lastName:"Doe", id:00000000}; 

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
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}
}
