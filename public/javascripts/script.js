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
  "Steven Spielberg",
  "Harrison Ford",
  "Robert De Niro",
  "Al Pachino",
  "Robert Downey Jr."
];

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

function getName() {
  name = names[getRandomInt(names.length)];
  return name;
}

function fillGuestinfo () {
  if (document.getElementById('studentInfoHeader') && document.getElementById('nonStudentInfoHeader')) {
  var list1 = document.getElementById('studentInfoList');
  var list2 = document.getElementById('nonStudentInfoList');
  var header1 = document.getElementById('studentInfoHeader');
  var header2 = document.getElementById('nonStudentInfoHeader');
  var i = 0;
  if (localStorage.numberStudents>0) {
    header1.innerHTML = 'Student information:';
    for (i; i < localStorage.numberStudents; i++) {
      var name = getName();
      var textbox = document.createElement('input');
      textbox.defaultValue = name;
      textbox.id = 'nameBox' + i;
      var numberbox = document.createElement('input');
      numberbox.class='wnumberInput';
      numberbox.type='number';
      numberbox.defaultValue=(getRandomInt(89999999)+10000000);
      numberbox.id = 'numberBox' + i;
      list1.appendChild(textbox);
      list1.appendChild(numberbox);
    }
  }

  if (localStorage.numberNonStudents>0) {
    header2.innerHTML = 'Non-student information:';
    for (o=0; o < localStorage.numberNonStudents; o++) {
      var name = getName();
      var textbox = document.createElement('input');
      textbox.defaultValue = name;
      textbox.id = 'nameBox' + i;
      var numberbox = document.createElement('input');
      numberbox.class='wnumberInput';
      numberbox.type='number';
      numberbox.defaultValue=(getRandomInt(89999999)+10000000);
      numberbox.id = 'numberBox' + i;
      list2.appendChild(textbox);
      list2.appendChild(numberbox);
      i++;
    }
  }
}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function saveGuestCount () {
  localStorage.numberStudents  = parseInt(document.getElementById('studentCount').innerHTML);
  localStorage.numberNonStudents = parseInt(document.getElementById('nonStudentCount').innerHTML);
}

function saveGuestInfo () {
  localStorage.guest1name = document.getElementById('nameBox0').value;
  localStorage.guest2name = document.getElementById('nameBox1').value;
  localStorage.guest3name = document.getElementById('nameBox2').value;
  localStorage.guest4name = document.getElementById('nameBox3').value;
  localStorage.guest1number = document.getElementById('numberBox0').value;
  localStorage.guest2number = document.getElementById('numberBox1').value;
  localStorage.guest3number = document.getElementById('numberBox2').value;
  localStorage.guest4number = document.getElementById('numberBox3').value;
}

function fillOvernightInfo () {
  if (document.getElementById('overnightDiv')){
  var list1 = document.getElementById('overnightList');
    var button = document.createElement('checkbox');
    var name = localStorage.guest1name;
    button.value = name;
    button.innerHTML = name;
    button.id = 'button1';
    button.type = 'button';
    button.class = 'overnightButtons';
    button.onclick = console.log('test');
    list1.appendChild(button);

    if(localStorage.guest2name != 'null') {
      var button = document.createElement('button');
      var name = localStorage.guest2name;
      button.innerHTML = name;
      button.id = 'button2';
      button.type = 'button';
      button.class = 'overnightButtons';
      button.onclick = (localStorage.guest2overnight = !localStorage.guest2overnight);
      list1.appendChild(button);
    }

    if(localStorage.guest3name != 'null') {
      var button = document.createElement('button');
      var name = localStorage.guest3name;
      button.innerHTML = name;
      button.id = 'button3';
      button.type = 'button';
      button.class = 'overnightButtons';
      button.onclick = (localStorage.guest3overnight = !localStorage.guest3overnight);
      list1.appendChild(button);
    }

    if(localStorage.guest4name != 'null') {
      var button = document.createElement('button');
      var name = localStorage.guest4name;
      button.innerHTML = name;
      button.id = 'button4';
      button.type = 'checkbox';
      button.class = 'overnightButtons';
      button.onclick = (localStorage.guest4overnight = !localStorage.guest4overnight);
      list1.appendChild(button);
    }
}
}

function flip (bool) {
  console.log (bool);
}

function storeOvernights () {
  console.log(localStorage.guest1overnight);
}

function fillInfo () {
  fillGuestinfo();
  fillOvernightInfo();
}
