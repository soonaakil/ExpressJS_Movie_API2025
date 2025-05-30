import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String },
    director: { type: String },
    releaseYear: { type: Number },
    producer: { type: String },
    rating: { type: Number },
    createdAt: { type: Date, default: Date.now },
})

export const Movies = mongoose.model("Movies",movieSchema)
