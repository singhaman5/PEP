// user management
// switch to main
db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [{role: "root", db: "test"}]
})


db.createUser({
    user: "user2",
    pwd: "user2",
    roles: [{role: "read", db: "lpu26a"}]
})