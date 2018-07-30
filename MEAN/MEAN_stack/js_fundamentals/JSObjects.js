let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function JSobjects1(){
    for(i in students){
        console.log("Name:" + students[i].name + ", cohort:" + students[i].cohort);
    }
}
JSobjects1();
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 function JSobjects2(){
    for(i in users){
        var count = 0;
        console.log(i.toUpperCase())
        for(key in users[i]){
            count += 1;
            console.log(count + " - "+(users[i][key].last_name).toUpperCase() + ", " +  (users[i][key].first_name).toUpperCase() + " - " + (users[i][key].first_name.length + users[i][key].last_name.length));
        }
    }
 }
 JSobjects2();