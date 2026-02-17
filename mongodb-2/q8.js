db.employees.find(
    {department:{$in:["HR","IT"]}}
)

db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{department:"Admin"}}
)

db.employees.find(
    {department:{$nin:["HR","IT"]}}
)

db.createCollection("students")

db.renameCollection("myStudents")