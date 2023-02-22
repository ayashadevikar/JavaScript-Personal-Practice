// find method

const users = [
    {userId : 1, userName: "alex"},
    {userId : 2, userName: "john"},
    {userId : 3, userName: "joe"},
    {userId : 4, userName: "edward"},
    {userId : 5, userName: "staley"},
  ];
  
  const myUser = users.find((user)=>{
       return user.userId===3;
  });
  
  console.log(myUser);