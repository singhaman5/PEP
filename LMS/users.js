//use lms

//users collection
db.users.insertOne({
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});

db.users.insertOne({
  _id: "u2",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", // student | instructor | admin
});

db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});

//shubham@gmail.com, 1234
db.users.find({
    email: "shubham@gmail.com",
    password: "1234"
})

// display all courses
db.courses.find()

// Show all modules of c1
db.modules.find({
    courseId: "c1"
})

// Show all lessons of m1
db.lessons.find({
    moduleId: "m1"
})

// enroll u1 to c1
db.enrollments.insertOne({
    courseId: "c1",
    studentId: "u1"
})

// Mark l1 complete when u1 hits complete button
db.lessonProgress.updateOne({
    studentId: "u1",
    lessonId: "l1",
    isCompleted: true,
}
)

// Check wheather l1 is completed or not
db.lessonProgress.findOne({
    lessonId: "l1", studentId: "u1"
})

// Change password
db.users.updateOne(
    {_id: "u1"},
{$set: {password: "abc"}}
)

// Showing profile details
db.users.find({_id: "u1"})

// Admin Interfaces
// Users CRUD
// Courses CRUD
// Modules CRUD