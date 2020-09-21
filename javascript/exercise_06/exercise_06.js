// let customersWithoutKYC = [
//     {
//       id: 2,
//       status: 'WIP'
//     },
//     {
//       id: 3,
//       status: 'PendingApproval'
//     },
//     {
//       id: 4,
//       status: 'Rejected'
//     },
//     {
//       id: 5,
//       status: 'PendingApproval'
//     },
//     {
//       id: 25,
//       status: 'WIP'
//     },
//     {
//       id: 35,
//       status: 'PendingApproval'
//     },
//     {
//       id: 45,
//       status: 'WIP'
//     },
//     {
//       id: 55,
//       status: 'PendingApproval'
//     }
//   ];



  let users = [
    {firstName: 'Bella', lastName: 'Chao', Gender: 'Female', salary: 120000, birthyear: 1995},
    {firstName: 'Alexas', lastName: 'Campbell', Gender: 'Male', salary: 110000, birthyear: 1982},
    {firstName: 'Nicolas', lastName: 'M', Gender: 'Male', salary: 100000, birthyear: 1984},
    {firstName: 'John', lastName: 'K', Gender: 'Male', salary: 90000, birthyear: 1998},
    {firstName: 'Alexander',lastName: 'L',  Gender: 'Male', salary: 190000, birthyear: 1975},
    {firstName: 'Jane', lastName: 'M', Gender: 'Female', salary: 190000, birthyear: 1988},
    {firstName: 'Lucy', lastName: 'N', Gender: 'Female', salary: 150000, birthyear: 1993},
    {firstName: 'Marco', lastName: 'O', Gender: 'Male', salary: 110000, birthyear: 1990},
    {firstName: 'Billy', lastName: 'M', Gender: 'Male', salary: 120000, birthyear: 1997}
];

  console.log(users.filter(user => user.Gender==='Female'));
    console.log(users.sort((a, b) => (a.birthyear > b.birthyear) ? 1 : -1));
    console.log(users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1));
    let totalSalary = users.reduce(function (total, user) {
        return total + user.salary;
      }, 0);
      console.log(totalSalary);

      //let newusers=users.map(element => {return Object.assign({},element.Gender,element.firstName)});
      var tempArray = [];
        for (var i = 0, item; item = users[i++];) {
            const {Gender,firstname,...x}=item;
            tempArray[i] = x;
            
        }
        
        // console.log(newusers);   
      
        // console.log(tempArray);


        //  Exercise 4: From an api we are getting following json data. this will always be summetrical so size of name, salary and other fields will always be same
         var data = {
           "name": ['john', 'jacob', 'jill', 'Bill', 'Billy'],
           "salary": [1000, 2000, 4000, 2500, 3400],
           "joiningYear": [2015, 2019, 2020, null, 1992]
         };
         
        //  for use in our application we need to transform this to an array with name, salary and joiningYear props.
         
        //  Transform above json object to desired array format. do it in a way so that in future if extra properties like birthyear also comes from api it should work without modification and result should have birthyear in each object inside result array.
         
        //  result : [
        //    {
        //      name: 'john',
        //      salary: 1000,
        //      joiningYear: 2015
        //    },
        //    ...
        //  ]
  var obj =JSON.parse(JSON.stringify(data));
  console.log(obj.name);
  var result=[];
  
  