db.employees.aggregate(
    [
        {$match: {department: "HR"}},
        {},
        {}
    ]
)

// Shows all fields
db.employees.aggregate(
    [
        {$match: {department: "HR"}}
    ]
)

// Shows only name field
db.employees.aggregate(
    [
        {$project: {name:1}}
    ]
)

// Shows only name field and hides _id field
db.employees.aggregate(
    [
        {$project: {_id:0,name:1}}
    ]
)
//It doesn't show the id, department, salary because its value is 0, and it shows the rest all
db.employees.aggregate(
    [
        {$project: {_id:0,department:0, salary:0}}
    ]
)

db.employees.aggregate(
    [
        {$sort: {name:1}}
    ]
)

db.employees.aggregate(
    [
        {$skip:1}
    ]
)

db.employees.aggregate(
    [
        {$limit:3}
    ]
)