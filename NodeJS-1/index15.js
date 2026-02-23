import express from "express"
import jwt from "jsonwebtoken"
const app = express()
const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDA1MiwiZXhwIjoxNzcxODM3NjUyfQ.-q8-cl1kN1LAuTa-DghmF8FQ_Bzx5T5lBnwSvUsVENo"
const user = jwt.verify(token,SECRET)
console.log(user)