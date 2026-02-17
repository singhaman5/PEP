// .explain("executionStats") -> Gives execution statistics about the query.
db.employees.find(
    {email:"brian@gmail.com"}
).explain("executionStats");

// Creates index for email field
db.employees.createIndex({email:1})

// To get indexes of a collection
db.employees.getIndexes()

// To drop an index
db.employees.dropIndex("email_1")

// To display only name field
db.employees.find(
    {},
    {name:1}
)

// To display only name field and sort it ascending
db.employees.find(
    {},
    {_id:0,name:1}
).sort({name:1})

db.employees.insertOne(
    {name:"abc"}
)

// To handle the above added abc, use -: collation
db.employees.find(
    {},
    {_id:0,name:1}
).collation(
    {locale:"en",strength:2}
)
.sort({name:1})

db.employees.insertOne(
    {name:"bbb"}
)