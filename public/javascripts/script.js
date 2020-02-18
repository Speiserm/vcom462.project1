let names = [
  "Alissa Melsopp",
  "Johnny Depp",
  "Arnold Schwarzenegger",
  "Jim Carrey",
  "Emma Watson",
  "Daniel Radcliffe",
  "Leonardo DiCaprio",
  "Tom Cruise",
  "Brad Pitt",
  "Charles Chaplin",
  "Morgan Freeman",
  "Tom Hanks",
  "Hugh Jackman",
  "Matt Damon",
  "Sylvester Stallone",
  "Will Smith",
  "Clint Eastwood",
  "Cameron Diaz",
  "George Clooney",
  "Stevel Spielberg",
  "Harrison Ford",
  "Robert De Niro",
  "Al Pachino",
  "Robert Downey Jr."
];

function store(field) {
     var item = document.getElementById(field);
     localStorage.setItem(field, item.value);
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

function getName() {
  name = names[getRandomInt(names.length)];
  return name;
}

function fillGuestinfo () {
  var list1 = document.getElementById('studentInfoList');
  var list2 = document.getElementById('nonStudentInfoList');
  for (var i = 0; i < localStorage.numberStudents; i++) {
    var name = getName();
    var textbox = document.createElement('input');
    textbox.defaultValue = name;
    var numberbox = document.createElement('input');
    numberbox.class='wnumberInput';
    numberbox.type='number';
    numberbox.defaultValue=(getRandomInt(89999999)+10000000);
    list1.appendChild(textbox);
    list1.appendChild(numberbox);
  }
  for (var i = 0; i < localStorage.numberNonStudents; i++) {
    var name = getName();
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    list2.appendChild(li);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function saveGuestNumbers () {
  localStorage.numberStudents  = parseInt(document.getElementById('studentCount').innerHTML);
  localStorage.numberNonStudents = parseInt(document.getElementById('nonStudentCount').innerHTML);
}

function wipeGuests () {

}
