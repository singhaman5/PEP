// db.employees.fin({},{})

db.employees.find({department:"HR"})

db.employees.find(
    {department:"HR"},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {department:"HR",salary:3000},
    {_id:0,name:1,salary:1}
)

// To show first 3 documents
db.employees.find().limit(3)

// To skip first 1 document and show the rest all
db.employees.find().skip(1)

// To show first 3 documents after skipping 1 document
db.employees.find().skip(1).limit(3)

// To sort
db.employees.find().sort({name:1})  // ascending order

// 3 limit tak dikhao, pehle ko skip karo, aur name ko descending mein dikhao
db.employees.find().limit(3).skip(1).sort({name:-1})

// To count documents
db.employees.find().count()