db.createView("orderView","employees",
    [
        {$lookup:{
            from: "orders",
            localField: "_id",
            foreignField: "empid",
            as: "orders"
        }},
        {$unwind: "$orders"},
        {$project: {
            _id: 0,
            name: 1,
            email: 1,
            department: 1,
            product: "$orders.product",
            orderValue: "$orders.orderValue"
        }}
    ]
)

//mongodump -d lms -o d:\

//mongodump -d lms -o d:\dbbackup

//mongorestore -d lms d:\dbbackup

// Correct code for restoration in mac
// mongorestore --db lms /Users/amansingh/dump/lms
