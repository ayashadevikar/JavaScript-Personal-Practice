// part 1

const obj1 = {
    name: 'alex',
    surname: 'edward',
    config: {
        role : 'ui developer'
    }
}

// for(let k in obj1){
//     console.log(obj1);
// }

obj1.surname = 'francis';
console.log(obj1);
obj1['year'] = 2020;
console.log(obj1);

// part 2
// constructor

const obj2 = new Object()
obj2.redbook = 'html book'
obj2.bluebook = 'css book'
obj2.myvalue = '1 css book'

console.log(obj2);

// part 3



const powers = {
    fly : true,
    coordinate: Math.random() + 2
}
const obj3 = Object.create(powers);

console.log(obj3);
console.log(obj3.coordinate);
console.log(Object.getPrototypeOf(obj3))


// part 4
const obj4 = Object.create({})

Object.defineProperty(obj4, 'book', {
    //  name: 'ayasha',
    // get: () => 'ayasha',
    set: () => 'blue',
    enumerable: true
})

console.log(obj4);
console.log(obj4.book);
console.log(Object.getPrototypeOf(obj4))

// part 5

const obj5 = {
    comics: 'marvel',
    pen: 'blue',
    printComic: function(){
        this.pen += 'red';
        return this;
    }
}

console.log(obj5.printComic().printComic().printComic());