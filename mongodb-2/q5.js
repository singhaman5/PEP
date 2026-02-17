// To display all the documents of HR employees
db.employees.find({department:"HR"})

// To display all the salary employees
db.employees.find({salary:"3000"})

// Another way using $eq operator for the same above question -: equal to
db.employees.find(
    {department:{$eq:"HR"}}
)

db.employees.find(
    {salary:{$eq:"3000"}}
)

// To display all the employees whose salary is greater than 3000 -: use $gt
db.employees.find(
    {salary:{$gt:"3000"}}
)

// To display all the employees whose salary is greater than equal to  3000 -: use $gte
db.employees.find(
    {salary:{$gte:"3000"}}
)

// To display all the employees whose salary is not equal to 3000 -: use $ne
db.employees.find(
    {salary:{$ne:"3000"}}
)

// To display all the employees whose salary is less than equal to 3000 -: use $lte
db.employees.find(
    {salary:{$lte:"3000"}}
)
