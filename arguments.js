function sum (){
  let args = Array.from(arguments);
  let total = 0;
  args.forEach(el => {total += el;});

  return console.log(total);
}
 // sum(1,2,3,4,5);

function sumSpread(...args) {
  let total = 0;
  args.forEach(el => {total+= el;});
  return console.log(total);
}

// sumSpread(1,2,3,4,5);

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Object.prototype.myBind = function(context,...args) {
  return (...otherArgs) => this.apply(context, args.concat(...otherArgs));
};

markov.says.myBind(breakfast, "meow", "Kush")();
markov.says.myBind(breakfast)("meow", "a tree");
