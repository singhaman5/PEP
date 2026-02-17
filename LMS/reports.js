// To display Course name and module name
db.courses.aggregate(
    [
        {
            $lookup: {
            from: "modules",
            localField: "_id",
            foreignField: "courseId",
            as: "modules"
        }
    },
    {
        $unwind: "$modules",
    },
    {
        $project: {
            _id: 0,
            courseName: "$title",
            moduleName: "$modules.title"
        }
    }
    ]
)

// Display the username and the courses they are enrolled in
db.enrollments.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "studentId",
            foreignField: "_id",
            as : "student"
        }
    },
    { $unwind: "$student"},
    {
        $lookup: {
            from: "courses",
            localField: "courseId",
            foreignField: "_id",
            as: "course"
        }
    },
    { $unwind: "$course"},
    {
        $project: {
            _id: 0,
            username: "$student.name",
            courseName: "$course.title"
        }
    }
])

// Add a user and enroll them in a course, then display the enrollment report
db.users.insertOne({
  _id: "u4",
  name: "Rohit Sharma",
  email: "rohit@gmail.com",
  password: "1234",
  role: "student"
});
db.enrollments.insertOne({
  studentId: "u4",
  courseId: "c2"
});

// To show how many students are enrolled in mongodb
db.enrollments.aggregate([
  {
    $match: { courseId: "c1" }
  },
  {
    $group: {
      _id: "$courseId",
      totalStudents: { $sum: 1 }
    }
  }
])

