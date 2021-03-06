var chrs = [
  { name: "Optimus Prime",
   class: "leader",
   afl: "autobot",
   vehicle: "truck"
  },
  { name: "Megatron",
   class: "leader",
   afl: "decepticon",
   vehicle: "tank"
  },
  { name: "Bumblebee",
   class: "scout",
   afl: "autobot",
   vehicle: "car"
  },
  { name: "Starscream",
   class: "scout",
   afl: "decepticon",
   vehicle: "plane"
  },
  { name: "Ironhide",
   class: "soldier",
   afl: "autobot",
   vehicle: "truck"
  },
  { name: "Brawl",
   class: "soldier",
   afl: "decepticon",
   vehicle: "tank"
  }
];

//chrs=character

for (var i = 0; i < chrs.length; i++) {
  const chrsName = chrs[i].name;
  const chrsClass = chrs[i].class.toUpperCase() //string to make things all uppercase
  const chrsVehicle = chrs[i].vehicle;
  const chrsAfl = chrs[i].afl;
  var boxEle = document.createElement("div");
  boxEle.classList.add("character");

  var img = document.createElement("img");
  img.classList.add("img");

  var nameEle = document.createElement("a");
  nameEle.innerHTML = "Name: "+ chrsName + "<br>";

  var classEle = document.createElement("a");
  classEle.innerHTML = "Class: " + chrsClass + "<br>";

  var aflEle = document.createElement("a");
  aflEle.innerHTML = "Afl: " + chrsAfl + "<br>";

  var vehicleEle = document.createElement("a");
  vehicleEle.innerHTML = "Vehicle: " + chrsVehicle + "<br>";


  
  //color affiliation for vehicules
  
  if (chrsVehicle === "truck") {
    vehicleEle.style.color = "blue";
  }

  if (chrsVehicle === "tank") {
    vehicleEle.style.color = "green";
  }

  if (chrsVehicle === "car") {
    vehicleEle.style.color = "gold";
  }

  if (chrsVehicle === "plane") {
    vehicleEle.style.color = "white";
  }

  
  //addss the images of autobots or decepticons
   if (chrsAfl === "autobot") {
    boxEle.classList.add("autobot");
    img.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }

 else if (chrsAfl === "decepticon") {
    boxEle.classList.add("decepticon");
    img.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  
  

  
  document.body.appendChild(boxEle);
  
  boxEle.appendChild(img);
  
  boxEle.appendChild(nameEle);
  
  boxEle.appendChild(classEle);
  
  boxEle.appendChild(vehicleEle);
  
  boxEle.appendChild(aflEle);

}