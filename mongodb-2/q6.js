db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:"HR",salary:{$gt:3000}}
)

// Another way of doing the above using -: $and operator
db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]}
)

// To display all the employees whose salary is greater than 3000 or department is HR -: use $or
db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]}
)

// To display all the employees whose salary is greater than 3000 or department is HR -: use $or
db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]},
    {name:1,email:1,department:1}
)

// To update one document
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{salary:3500}}
)

// To increment salary by 3500 of cathy
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$inc:{salary:3500}}
)

// To update multiple documents
db.employees.updateMany(
    {},
    {$inc:{salary:1000}}
)

// Updates all the documents and adds a new field 'points' with value 1
db.employees.updateMany(
    {},
    {$set:{points:1}}
)

// Updates all the documents and adds a new field 'points' with value 1 and increment it by 2
db.employees.updateMany(
  {},
  { 
    $set: { points: 1 },
    $inc: { points: 2 }
  }
)

// Updates only brian's document and sets points to 10
db.employees.updateMany(
    {email:"brian@gmail.com"},
    {$set: {points:10}}
)

// Upsert -: combination of update and insert , if upsert
db.employees.updateMany(
    {email:"abc@gmail.com"},
    {$set: {points:10}},
    {upsert:true}
)

// To display only name field of all documents
db.employees.find({},{name:1})

// To delete single document
db.employees.deleteOne({email:"abc@gmail.com"})

// To delete all document
db.employees.deleteMany()
