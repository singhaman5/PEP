// Login into the replicaSet
// Created hdfcBank database in primary server
// Created users collection and inserted some documents in the primary server

const session = db.getMongo().startSession()

session.startTransaction()
var custCollection = session.getDatabase("hdfcBank").customers
db.custCollection.updateOne({_id:"c1"},{$inc:{balance: -100}}) // Reduce 100rs from c1 account
db.custCollection.updateOne({_id:"c2"},{$inc:{balance: 100}})  // Add 100rs in c2 account
session.commitTransaction()
session.endSession()

// To abort a transaction in between, use -: session.abortTransaction() instead of session.commitTransaction()


// ✅ Insert 100 users using for loop
// for (let i = 1; i <= 100; i++) {
//   db.users.insertOne({
//     name: "User" + i,
//     age: 18 + (i % 10)
//   });
// }

// 🔹 Verify insertion
// db.users.countDocuments()


//Course id k collection ko course module se link krna
db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { courseId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$courseId", "$$courseId"] }
          }
        },
        {$lookup: {
            from: "lessons",
            let: { moduleId: "$_id" },
            pipeline: [
                {$match: {$expr: {$eq: ["$moduleId", "$$moduleId"]}}}
            ],
            as: "lessons"
        }}
      ],
      as: "modules"
    }
  }
])
