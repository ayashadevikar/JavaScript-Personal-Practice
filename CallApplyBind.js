// call

// function hello(){
//     console.log("hello world");
// }

// hello.call();

const user1 = {
    firstName : "alex",
    age : 8,
    about : function(hobby, favMusician){
           console.log(this.firstName, this.age, hobby, favMusician);
    }
}

// user1.about();

const user2 = {
    firstName : "john",
    age : 9,
}

// user1.about.call(user2);
// user1.about.call();
// user1.about.call(user1);
// user1.about();
user1.about.call(user2, "guitar", "mozart");
// apply

about.apply(user1, ["guitar", "bach"]);


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user3 = {
    firstName : "alex",
    age : 8,
  
}

about.call(user3, "guitar", "mozart");

// bind

const func = about.bind(user1, "guitar", "bach");
func();