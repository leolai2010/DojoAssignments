// Create a nested if statement that follows these rules. 
// If name is Jim Halpert 
    // if age is over 20 print "Old Jim"
    // If age is under 20 print "Young Jim"

// If name is Michael Scott
    // IF age is over 20 print "Immature Mike"
    // If age is under 20 print "Super immature Mike"

// If name is not Michael or Jim print "Leslie Knope"

function nested(name, age){
    if(name =='Jim Halpert' && age>20){
        console.log("Old Jim");
    }   
    else if(name =='Jim Halpert' && age<20){
        console.log("Young Jim");
    }
    else if(name =='Michael Scott' && age>20){
        console.log("Immature Mike");
    }
    else if(name =='Michael Scott' && age<20){
        console.log("Super Immature Mike");
    }
    else{
        console.log("Leslie Knope");
    }
}


// Sample function calls
nested('Jim Halpert', 40);
nested('Michael Scott', 10);
nested("leo lai", 52)