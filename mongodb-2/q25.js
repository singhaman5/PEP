                                    // Sharding in MongoDB
// Creating shard1

// Create folder dbshards
// Create folders conf, confr, s1, s1r, s2, s2r inside dbshards folder
// Note: These 6 folders represent 6 different servers located in 6 different locations or countries 

// Type -: "mongod --configsvr -replSet cf --dbpath "d:\dbshards\conf" --port 27018 "
// Type -: "mongod --configsvr -replSet cf --dbpath "d:\dbshards\confr" --port 27019 "
// mongosh --port 27018

// rs.initiate({
//     _id: "cf",
//     members: [{_id:0, host: "127.0.0.1:27018"},
//         {_id:1, host: "127.0.0.1:27019"}
//     ]
// })

// rs.config()
// rs.status()

// Now start the shard servers in the terminal
// Type this is new tab(4th tab) -: " mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1" --port 27020 "
// Type this is new tab(5th tab) -: " mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1r" --port 27021 "
// Now in new tab(6th tab) -: type -: " mongosh --port 27020 "
// rs.initiate({
//     _id: "s1",
//     members: [{_id:0, host: "127.0.0.1:27020"},
//         {_id:1, host: "127.0.0.1:27021"}
//     ]
// }
// rs.config()
// rs.status()

// Create shard2 in the same way as shard1 but with different ports and folder names

// Now start the shard servers in the terminal
// Type this is new tab(7th tab) -: " mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s2" --port 27022 "
// Type this is new tab(8th tab) -: " mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s1r" --port 27023 "
// Now in new tab(9th tab) -: type -: " mongosh --port 27022 "
// rs.initiate({
//     _id: "s2",
//     members: [{_id:0, host: "127.0.0.1:27022"},
//         {_id:1, host: "127.0.0.1:27023"}
//     ]
// }
// rs.config()
// rs.status()


// Now creating the Routing server in the terminal

// Type this is new tab(10th tab) -: " mongos --configdb cf/127.0.0.1:27018,127.0.0.1:27019 --port 27050 "
// Type : "mongosh --port 27050"
// Type-: sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021")
// Type-: sh.addShard("s2/127.0.0.1:27022,127.0.0.1:27023")
// sh.status()
// Create database by typing -: use icici 
// sh.enableSharding("icici")
// sh.shardCollection("icici.customers", {_id: 1})
// sh.getShadedDataDistribution()
// show collections
// db.customers.insertOne({_id:1, name:"customer1"})

// for(let i=2; i<=10000; i++){
//     db.customers.insertOne({
//         _id:i,
//         name:"customer"+i
//     })
// }

// db.customers.countDocuments() -> To check the number of documents in the collection

// use config
db.settings.updateOne(
    {_id: "chunksize"},
    {$set: {value: 1} },
    {upsert: true}
)

for(let i=10001; i<=20000; i++){
    db.customers.insertOne({
        _id: i,
        name: "customer" + i,
    })
}
