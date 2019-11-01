console.log('Array of objects');

var dogs = [
  {
      name : "Browny",
      id   : "D101",
      breed: "Australian Bulldog",
      color: "Brown and White",
      height: 50,
      age   : 8,
      photo1: "images/aussieBulldog1.jpg",
      photo2: "images/aussieBulldog2.jpg",
      photo3: "images/aussieBulldog3.jpg"

  },
  {
    name : "Blacky",
    id   : "D102",
    breed: "American Staffordshire",
    color: "Black and White",
    height: 60,
    age   : 10,
    photo1: "images/americanStaffordshire1.jpg",
    photo2: "images/americanStaffordshire2.jpg",
    photo3: "images/americanStaffordshire3.jpg"
  },
  {
    name : "Beaggie",
    id   : "D103",
    breed: "Beagle",
    color: "Brown, white and black",
    height: 35,
    age   : 6,
    photo1: "images/beagle1.jpg",
    photo2: "images/beagle2.jpg",
    photo3: "images/beagle3.jpg"
  },
  {
    name : "Alasky",
    id   : "D104",
    breed: "Alaskan Malamute",
    color: "Black and White",
    height: 70,
    age   : 11,
    photo1: "images/alaskanMalamute1.jpg",
    photo2: "images/alaskanMalamute2.jpg",
    photo3: "images/alaskanMalamute3.jpg"
  },
  {
    name : "Britty",
    id   : "D105",//id follows a pattern
    breed: "British Bulldog",
    color: "Brown and White",
    height: 30,
    age   : 13,
    photo1: "images/britishBulldog1.jpg",
    photo2: "images/britishBulldog2.jpg",
    photo3: "images/britishBulldog3.jpg"
  }
];
//all dogs
var id = 101;// variable is used to generate id's for image
function allDogs(){
  document.getElementById('dogs').innerHTML = " "; //to clear the container
for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-primary">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="D' + id.toString() + ' " class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> <h5 class="text-primary" >Breed : ' + dogs[i].breed + '</h5>'
  + '</br>  <h5 class="text-primary" >Age : ' + dogs[i].age + '</h5>'
  + '</br>  <h5 class="text-primary" >Height :' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
  id++; //id is incremented automatically

}
}

//conditional display
//beagle
document.getElementById('beagle').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === "Beagle") {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br>  <h5 class="text-primary" >Breed :' + dogs[i].breed + '</h5>'
      + '</br>  <h5 class="text-primary" > Age :' + dogs[i].age + '</h5>'
      + '</br>  <h5 class="text-primary" >Height :' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

//height >40
document.getElementById('height40').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].height >= 40) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-primary">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br>  <h5 class="text-primary" >Breed :' + dogs[i].breed + '</h5>'
      + '</br>  <h5 class="text-primary" > Age :' + dogs[i].age + '</h5>'
      + '</br> <h5 class="text-primary" >Height : ' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});


//bulldog
document.getElementById('bullDog').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = " "; //to clear the container


  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed.indexOf("Bulldog") > (-1) ) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-primary myHeading">' + dogs[i].name + '</h1>'
      + '<div class="row">'
      +'<div class="col">'
      + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br></br>  <h5 class="text-primary" >Breed :' + dogs[i].breed + '</h5>'
      + '</br>  <h5 class="text-primary" > Age :' + dogs[i].age + '</h5>'
      + '</br>  <h5 class="text-primary" >Height :' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
   }
  }
});

 document.getElementById('changeName').addEventListener('click', function(){
   var oldName = document.getElementById('oldName').value;
   var newName = document.getElementById('newName').value;
   console.log(oldName, newName);
   for(var i = 0; i < dogs.length; i++) {
     if (oldName === dogs[i].name){
       dogs[i].name = newName;
     }
   }
   console.log(dogs);
   allDogs();
 });

// document.getElementById('all').addEventListener('click', function(){
  allDogs();
// });


$('.myDogs').on('click', function(){
  // console.log('dogs');
  $('.noModal').hide();
   console.log(typeof(this.id));// to check the data type
  console.log(this.id);
  document.getElementById('modalContent').innerHTML = ' ';
  $('.myModal').show();
  for (var i = 0; i < dogs.length ; i++){
    console.log(typeof(dogs[i].id));
    console.log(dogs[i].id);
    console.log(i);
    console.log(dogs[i].id === this.id);
    //id property of dogs is checked for  equivalence with the image id of the clicked element
    if (this.id.trim() == dogs[i].id.trim()) {
      //remove leading and trailing space in the string while trying to match
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].color);
      console.log(dogs[i].height);
      console.log(dogs[i].age);
      document.getElementById('modalContent').innerHTML
      += '<div class="jumbotrons ml-5 text-info"> ' + dogs[i].name + '</br>'
      + dogs[i].breed + '</br>' + dogs[i].color + '</br>'
      + 'Height : ' + dogs[i].height + '</br>' + 'Age :' + dogs[i].age + '</div>'
      + '<div id="carouselExampleIndicators" class="carousel slide bg-info col-12 col-sm-10 col-md-10 col-lg-10 myCarousel" data-ride="carousel">'
      + '<ol class="carousel-indicators">'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>'
      + '</ol> <div class="carousel-inner"><div class="carousel-item active">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo2 + '"  alt="Dog"/>'
      + '</div><div class="carousel-item">'
      + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo3 + '"  alt="Dog"/>'
      + '</div> </div>'
      + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Previous</span> </a>'
      + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Next</span> </a></div>';
    }
    // + '<img class="card-thumbnail  myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
  }

})

$('.closeBar').on('click', function(){
  $('.myModal').hide();
  $('.noModal').show();
});

document.getElementById('nameDecrease').addEventListener('click', function(){

  // var x =dogs.sort();
  // console.log(x);


  dogs.sort(compare); // calling a function called compare to define the object property

  function compare(a,b){

    if (a.name < b.name){
      return 1; //returns true
    } else if (a.name > b.name){
      return -1; //returns false
    }


  }//end of function comparej

  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="D' + id.toString() + ' " class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
  id++; //id is incremented automatically

  }



});


document.getElementById('nameIncrease').addEventListener('click', function(){

  // var x =dogs.sort();
  // console.log(x);


  dogs.sort(compare); // calling a function called compare to define the object property

  function compare(a,b){

    if (a.name > b.name){
      return 1; //returns true
    } else if (a.name < b.name){
      return -1; //returns false
    }


  }//end of function comparej

  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
  += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
  + '<div class="row">'
  +'<div class="col">'
  + '<img id="D' + id.toString() + ' " class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
  + '</div>'
  + '<div class="col">'
  + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
  + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
  + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
  + '</div>'
  + '</div>';
  id++; //id is incremented automatically

  }



});
