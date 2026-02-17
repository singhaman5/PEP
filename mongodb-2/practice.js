db.products.insertOne({
    name: "Laptop",
    price: 1200,
})

db.products.find({
  price: { $gt: 1000 },
  name: "desktop"
})

db.products.find({ price: { $gt: 1000 } })

db.products.updateMany({},{$set: {description: "This is the description"}})

db.products.updateMany({},{$set: {rating: 3}})

// Practice day 2:
