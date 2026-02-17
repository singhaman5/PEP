// Array Operator

db.employees.find(
    {location:"FL"}
)

//To add a new location to mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location:"AZ"}}
)

//To delete an added location from mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location:1}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateOne(
    {},
    {$push:{skills:"Python"}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateMany(
    {},
    {$push:{skills:"Python"}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
)


//To add a new location to mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location:"AZ"}}
)

//To delete an added location from mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location:1}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateOne(
    {},
    {$push:{skills:"Python"}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateOne(
    {},
    {$push:{skills:".NET"}}
)
// Array Operator

db.employees.find(
    {location:"FL"}
)

//To add a new location to mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$push:{location:"AZ"}}
)

//To delete an added location from mike's location array-:
db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$pop:{location:1}}
)

// Create a new field skills and add Python  as array in only 1st table
db.employees.updateOne(
    {},
    {$push:{skills:"Python"}}
)

// Use $addToSet to add only if the element is not present, otherwise it will not add
db.employees.updateMany(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"Java"}}
)

// Removes last matching element -: $pull
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pull:{skills:"Java"}}
)