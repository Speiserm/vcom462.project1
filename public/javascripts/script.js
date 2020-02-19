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

function validateWnumber () {
  var number = parseInt(document.getElementById('wnumber').value);
  if ( number > 10000000 && number < 99999999) {
    location.href='/numberguests';
  }
  else {
    document.getElementById('warningtext').innerHTML = "Sorry, that's not a valid W number.";
  }
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

  if(localStorage.guest1name != 'null') {
    var button = document.createElement('input');
    var name = localStorage.guest1name;
    button.name = name;
    button.id = 'button1';
    button.type = 'checkbox';
    button.class = 'overnightButtons';
    document.getElementById('button1label').innerHTML = name;
    list1.appendChild(button);
}
    if(localStorage.guest2name != 'null') {
      var button = document.createElement('input');
      var name = localStorage.guest2name;
      button.name = name;
      button.id = 'button2';
      button.type = 'checkbox';
      button.class = 'overnightButtons';
      document.getElementById('button2label').innerHTML = name;
      list1.appendChild(button);
    }

    if(localStorage.guest3name != 'null') {
      var button = document.createElement('input');
      var name = localStorage.guest3name;
      button.name = name;
      button.id = 'button3';
      button.type = 'checkbox';
      button.class = 'overnightButtons';
      document.getElementById('button3label').innerHTML = name;
      list1.appendChild(button);
    }

    if(localStorage.guest4name != 'null') {
      var button = document.createElement('input');
      var name = localStorage.guest4name;
      button.name = name;
      button.id = 'button4';
      button.type = 'checkbox';
      button.class = 'overnightButtons';
      document.getElementById('button4label').innerHTML = name;
      list1.appendChild(button);
    }
}
}

function button1action () {
  var checkBox = document.getElementById("button1");
  if (checkBox.checked == true) {
    localStorage.guest1overnight = false;
    document.getElementById('button1label').style.color= 'black';
  }
  else {
    localStorage.guest1overnight = true;
    document.getElementById('button1label').style.color= 'green';
  }
}

function button2action () {
  var checkBox = document.getElementById("button2");
  if (checkBox.checked == true) {
    localStorage.guest1overnight = false;
    document.getElementById('button2label').style.color= 'black';
  }
  else {
    localStorage.guest1overnight = true;
    document.getElementById('button2label').style.color= 'green';
  }
}

function button3action () {
  var checkBox = document.getElementById("button3");
  if (checkBox.checked == true) {
    localStorage.guest1overnight = false;
    document.getElementById('button3label').style.color= 'black';
  }
  else {
    localStorage.guest1overnight = true;
    document.getElementById('button3label').style.color= 'green';

  }
}

function button4action () {
  var checkBox = document.getElementById("button4");
  if (checkBox.checked == true) {
    localStorage.guest1overnight = false;
    document.getElementById('button4label').style.color= 'black';
  }
  else {
    localStorage.guest1overnight = true;
    document.getElementById('button4label').style.color= 'green';
  }
}

function fillReciepts () {
  if (document.getElementById('completeDiv')){
  var list1 = document.getElementById('completeList');
  if(localStorage.guest2name != 'null') {
    document.getElementById('guest1name').innerHTML = localStorage.guest1name;
    if (localStorage.guest1number==true) {
      document.getElementById('guest1number').innerHTML = localStorage.guest1number;
    }
    if (localStorage.guest1overnight==true) {
      document.getElementById('guest1overnight').innerHTML = 'Overnight';
    }
  }

    if(localStorage.guest2name != 'null') {
      document.getElementById('guest2name').innerHTML = localStorage.guest2name;
      if (localStorage.guest2number==true) {
        document.getElementById('guest2number').innerHTML = localStorage.guest2number;
      }
      if (localStorage.guest2overnight==true) {
        document.getElementById('guest2overnight').innerHTML = 'Overnight';
      }
    }

    if(localStorage.guest3name != 'null') {
      document.getElementById('guest3name').innerHTML = localStorage.guest3name;
      if (localStorage.guest3number==true) {
        document.getElementById('guest3number').innerHTML = localStorage.guest2number;
      }
      if (localStorage.guest3overnight==true) {
        document.getElementById('guest3overnight').innerHTML = 'Overnight';
      }
    }

    if(localStorage.guest4name != 'null') {
      document.getElementById('guest4name').innerHTML = localStorage.guest4name;
      if (localStorage.guest4number==true) {
        document.getElementById('guest4number').innerHTML = localStorage.guest2number;
      }
      if (localStorage.guest4overnight==true) {
        document.getElementById('guest4overnight').innerHTML = 'Overnight';
      }
    }
}
}

function fillInfo () {
  fillGuestinfo();
  fillOvernightInfo();
  fillReciepts();
}

function clearGuests () {
  localStorage.guest1name = null;
  localStorage.guest2name = null;
  localStorage.guest3name = null;
  localStorage.guest4name = null;
  localStorage.guest1number = null;
  localStorage.guest2number = null;
  localStorage.guest3number = null;
  localStorage.guest4number = null;
}
