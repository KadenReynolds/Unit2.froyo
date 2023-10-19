const flavours = {
  vanilla: 0,
  chocolate: 0,
  strawberry: 0,
  coffee: 0,
}

const flavourInput = prompt(
  "Please enter froyo flavors seperated by commas.",
  "vanilla,strawberry,chocolate,coffee"
);
let flavourArray = flavourInput.split(",")
for(let i = 0; i < flavourArray.length; i++){
  if (flavourArray[i] === "vanilla"){
    flavours.vanilla += 1
  }
  else if (flavourArray[i] === "chocolate"){
    flavours.chocolate += 1
  }
  else if (flavourArray[i] === "strawberry"){
    flavours.strawberry += 1
  }
  else if (flavourArray[i] === "coffee"){
    flavours.coffee += 1
  }
}

totalFlavours = 0

for(const key in flavours){
  totalFlavours += flavours[key]
}
console.log(`You have a total of ${totalFlavours} froyo's on the way!`)
console.table(flavours)
