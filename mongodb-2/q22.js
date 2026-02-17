db.employees.find({
    name: "John Smith"
})

// $regex is used to find the name similar to the given name. We don't provide the exact name/
db.employees.find({
    name: {$regex: "John"}
})

// To search based on case sensitivity, we use $options: 'i' for case insensitive search
db.employees.find({
    name: {$regex: "john",$options: "i"}
})

// For searching based on ending letter
db.employees.find({
    name: {$regex: "h$",$options: "i"}
})

// For searching based on begining letter
db.employees.find({
    name: {$regex: "^M",$options: "i"}
})