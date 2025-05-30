import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import { addMovie, deleteMovies, getMovies, getMoviesById, updateMovies } from './controllers/movie.js';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aakilamity:YeoJ4EC4rF3a4fuL@cluster0.g2450yg.mongodb.net/',
    {
        dbName: "Movie_API",
    }
)
.then((msg)=>console.log('MongoDB Connected Successfully..!'))
.catch((err)=>console.log(err.message));

//Home route
app.get('/', (req, res)=> {
    res.send({
        msg: "You are a home page now..",
        status: true
    })
})
//get movie
app.get('/movies', getMovies);

//get movie by id
app.get('/movies/:id', getMoviesById);

//add movie
app.post('/movies/add', addMovie);

//update movie by id
app.put('/movies/:id', updateMovies);

//delete movei by id
app.delete('/movies/:id', deleteMovies);

const port = 1011;
app.listen(port, (()=> console.log(`My Server is running on port ${port}`)));
