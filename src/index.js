import express  from "express";
import { my_connection_sql } from "./db.js";
import { PORT } from "./config.js";

const roger_app = express();
roger_app.listen(PORT)

roger_app.get('/' , async(req ,res)=>{
    const [result] =await my_connection_sql.query(`SELECT * FROM movies`)
    res.json(result)
})



roger_app.get('/create' , async (req ,res ) =>{
    const [result] = await  my_connection_sql.query(`INSERT INTO movies VALUES (null , 'movie test' , 'action' , 'movie xddd perrito vegano')` )
    res.json(result)
})


console.log(`Server is listening on ${[PORT]}`)

