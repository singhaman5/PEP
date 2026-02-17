db.employees.find(
    {},
    {name:1,department:1}
)

// To change the name from ""Department" to "DEPT"
db.employees.find(
    {},
    {name:1,dept:"$department"}
)

// Inserting multiple values
db.users.insertOne(
    {
        name:"Yash",
        age: 20,
        address: {addr1:"50 Verdin Ct", city:"Columbus", state:"OH"}
    },
    {
        name:"Anshul",
        age: 21,
        address: {addr1:"123 Main St", city:"Austin", state:"TX"},
    },
    {
        name:"Aman",
        age: 22,
        address: {addr1:"456 Oak St", city:"Seattle", state:"WA"},
    }
)

// Bad way of displaying city from address
db.users.find(
    {},
    {
        name:1,
        age:1,
        "address.city":1
    }
)

// Good way of displaying city from address
db.users.find(
    {},
    {
        name:1,
        age:1,
        city:"$address.city"
    }
)

// Displaying city and state from address
db.users.find(
    {},
    {
        name:1,
        age:1,
        city:"$address.city",
        state:"$address.state"
    }
)

// Add skills array for all users and populate Java and Python -> using set
db.users.updateMany(
    {},
    {$set: {skills: ["Java","Python"]}}
)

// Add skills array for all users and populate Java and Python -> using push
db.users.updateMany(
    {},
    {$push: {skills: ["Java","Python"]}}
)

//To add a skill in Yash column
db.users.updateOne(
    {name:"Yash"},
    {$addToSet: {skills: ".NET"}}
)

// To display only name and skills
db.users.find(
    {},
    {
        _id:0,
        name: 1,
        skills: 1
    }
)

// Sirf name aur skills field rakhta hai (_id hata deta hai)
//skills array ko tod kar alag-alag documents bana deta hai
db.users.aggregate(
    [
        {$project: {
            _id:0,
            name:1,
            skills:1
        }},
        {$unwind: "$skills"}
    ]
)