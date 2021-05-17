// alert("It works!");

// Footer display
// function myFunction() {
//     var x = document.getElementById("footer");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


$(window).on('load', function() {
    $('#startmodal').modal('show');
});

// earth
function startgame1(){
  document.getElementById("datap1").innerHTML = "100"
  document.getElementById("datap2").innerHTML = "0"
  document.getElementById("datap3").innerHTML = "0"
  document.getElementById("datap4").innerHTML = "0"

  document.getElementById("datae1").innerHTML = "Earth"
  document.getElementById("datae2").innerHTML = "0 km"
  document.getElementById("datae3").innerHTML = "Air"

  document.getElementById("datas1").innerHTML = "10000"
  document.getElementById("datas2").innerHTML = "5000"

  $('#startmodal').modal('hide');
}

// moon
function startgame2(){
  document.getElementById("datap1").innerHTML = "75"
  document.getElementById("datap2").innerHTML = "0"
  document.getElementById("datap3").innerHTML = "0"
  document.getElementById("datap4").innerHTML = "0"

  document.getElementById("datae1").innerHTML = "Moon"
  document.getElementById("datae2").innerHTML = "384k km"
  document.getElementById("datae3").innerHTML = "CO2"

  document.getElementById("datas1").innerHTML = "7500"
  document.getElementById("datas2").innerHTML = "4000"

  $('#startmodal').modal('hide');
}
// mars
function startgame3(){
  document.getElementById("datap1").innerHTML = "50"
  document.getElementById("datap2").innerHTML = "0"
  document.getElementById("datap3").innerHTML = "0"
  document.getElementById("datap4").innerHTML = "0"

  document.getElementById("datae1").innerHTML = "Mars"
  document.getElementById("datae2").innerHTML = "322M km"
  document.getElementById("datae3").innerHTML = "None"

  document.getElementById("datas1").innerHTML = "5000"
  document.getElementById("datas2").innerHTML = "2500"

  $('#startmodal').modal('hide');
}


// item generator
var chance = 0;
var itemfound;

var invslot = ["inv1", "inv2", "inv3", "inv4", "inv5", "inv6", "inv7", "inv8"]; //0-7 
//invslot[0] = inv1
var invslotid = 0;
var invcount = 0;

function generator(){

  chance = Math.floor((Math.random()* 10) + 1);

  if(chance >= 8) {
    itemfound = false;
    alert("You did not found an item! :(")
  }
  else
  { itemfound = true;
    alert("You have found an item!")
    itemchooser();
  }

  //console.log(itemfound);  
  //console.log(chance);

  //check
  var srccheck = document.getElementById(invslot[invslotid]).src;
  //console.log(srccheck);
  //invslot plus
  //var invslot = 1; // 1=inv1
  //console.log("ifruns");
  
  if(srccheck == 'http://127.0.0.1:5500/images/items/empty.png'){
    //console.log("iftrue");
  }
  else {
    invcount++;
    invslotid++;
    if(invcount == 8){
      // TODO continue the game
      invcount = 0;
      invslotid = 0;
    }
  }
  //console.log(invcount);
}
//rnd
var choosenitem;

function itemchooser(){

  if(itemfound = true){
    choosenitem = Math.floor((Math.random()* 7) + 1);
  }


  if(choosenitem == 1) {
    document.getElementById(invslot[invslotid]).src='/images/items/rock.png'
  }
  else if(choosenitem == 2) {
    document.getElementById(invslot[invslotid]).src='/images/items/astronaut.png'
  }
  else if(choosenitem == 3) {
    document.getElementById(invslot[invslotid]).src='/images/items/cybertruck.png'
  }
  else if(choosenitem == 4) {
    document.getElementById(invslot[invslotid]).src='/images/items/dogecoin.png'
  }
  else if(choosenitem == 5) {
    document.getElementById(invslot[invslotid]).src='/images/items/flint.png'
  }
  else if(choosenitem == 6) {
    document.getElementById(invslot[invslotid]).src='/images/items/gas.png'
  }
  else if(choosenitem == 7) {
    document.getElementById(invslot[invslotid]).src='/images/items/gem.png'
  }
  //console.log(choosenitem)

  
}

// console.log("asd");
var counter = 0;
function nextday(){
  // console.log(counter)
  counter++;
  document.getElementById("days").innerHTML = counter;
}


//variables for statics
var fuel; //0-100
var food; 
var water;

function costofday(){
  //fuel
  fuel = document.getElementById("datap1").innerHTML;
  if(fuel > 0) {
    fuel = fuel - 5;
    document.getElementById("datap1").innerHTML = fuel;
  }
  //if(fuel = 0)

  //food
  food = document.getElementById("datas1").innerHTML;
  food = food - 500;
  document.getElementById("datas1").innerHTML = food;

  //water
  water = document.getElementById("datas2").innerHTML;
  water = water - 250;
  document.getElementById("datas2").innerHTML = water;
}

function makesupply() {
  //fuel
  fuel = document.getElementById("datap1").innerHTML;
  fuel = parseInt(fuel) + 10;
  document.getElementById("datap1").innerHTML = fuel;

  //food
  food = document.getElementById("datas1").innerHTML;
  food = parseInt(food) + 1000;
  document.getElementById("datas1").innerHTML = food;

  //water
  water = document.getElementById("datas2").innerHTML;
  water = parseInt(water) + 500;
  document.getElementById("datas2").innerHTML = water;
}