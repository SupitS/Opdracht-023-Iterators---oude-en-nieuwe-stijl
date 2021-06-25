// Opdracht 023: Iterators - oude en nieuwe stijl


// Oude stijl: loops - While loop & For loop

const color = ['yellow', 'blue', 'red', 'orange'];
var colorcounter = 0;

while (colorcounter < 4 ){
    console.log("Color " + color[colorcounter]);
    colorcounter++;
};

console.log("Last color ");


const colour = ["yellow", "blue", "red", "orange"];

for (let i = 0; i < colour.length; i++){
    console.log(colour [i]);
};

console.log("This is the last colour ");

// Nieuwe stijl: array methods - forEach
const kleur = ["yellow", "blue", "red", "orange"];

kleur.forEach(element => console.log(element));
