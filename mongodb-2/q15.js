// To display grade based on salary using $cond (conditional operator):
db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade: {
                $cond: [{$gt:["$salary",4500]},"Grade A","Grade B"]
            }
        }}
    ]
)


// Another way of doing the above
db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade: {
                $cond:{if:{$gt:["$salary",4500]},
                then:"Grade A",
                else:"Grade B"}
            }
        }}
    ]
)

// Switch case to display grade based on salary
db.employees.aggregate(
    [
        {$project: {
            _id: 0,
            name:1,
            salary:1,
            grade: {
                $switch: {
                    branches: [
                    {case:{$gt:["$salary",4500]},then: "Grade A"},
                    {case:{$gt: ["$salary",3000]},then:"Grade B"}],
                    default: "Grade C",
                }
            }
        }}
    ]
)

db.orders.insertOne({
    empid: ObjectId('69803470ba1b7297d73c5516'),
    product: "desktop",
    orderValue: 21000
})

db.orders.insertOne({
    empid:  ObjectId('6980387cba1b7297d73c5517'),
    product: "laptop",
    orderValue: 23000
})

db.orders.insertOne({
    empid: ObjectId('6980387cba1b7297d73c5518'),
    product: "pc",
    orderValue: 20000
})

db.orders.insertOne({
    empid: ObjectId('6980387cba1b7297d73c5519'),
    product: "tablet",
    orderValue: 25000
})