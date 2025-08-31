import { Movies } from "../Models/Movie.js";

//add movies here
export const addMovie = async (req, res)=> {
    // let movie = req.body;
    // console.log("Getting movies = ", movie);
    let addToDB = await Movies.create(req.body);
    res.json({
        msg: 'Added movies successfully..!',
        addToDB,
        status: true
    })
};

//Get all movies here
export const getMovies = async (req, res)=> {
    let movies = await Movies.find();
    res.json({
        msg: 'All Movies Here',
        Movie_Collection: movies.length,
        movies,
        status: true
    })
};

//Get all movies by id
export const getMoviesById = async (req, res)=> {
    let id = req.params.id;
    let moviebyid = await Movies.findById(id);

    res.json({
        msg: 'Feching All Movies By Id',
        moviebyid,
        status: true
    })
};

//Update all movies by id
export const updateMovies = async (req, res)=> {
    let id = req.params.id;
    let movieUpdate = req.body;

    let movie = await Movies.findByIdAndUpdate(id, movieUpdate, {new:true});
     
    if (!movie) return res.json({msg: 'Invalid Id'})

    res.json({
        msg: 'Movie Updated Successfully',
        status: true
    })
};

//Delete movies by id
export const deleteMovies = async (req, res)=> {
    let id = req.params.id;
    let movie = await Movies.findByIdAndDelete(id);
     
    if (!movie) return res.json({msg: 'Invalid Id'})

    res.json({
        msg: 'Movie Deleted Successfully',
        status: true
    })
};
