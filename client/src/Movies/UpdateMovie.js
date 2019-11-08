import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UpdateMovie = () => {
    const [movie, setMovie] = useState({
        title: '',
        director: '',
        metascore: '',
        actors: ''
    })
    useEffect(() => {

    })
    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {

    }
    return (
        <div>
            <h1>Edit Movie</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    placeholder = 'Movie Title'
                    name = 'movie-title'
                    value = {movie.title}
                    onChange = {handleChange}
                 />
                <input 
                    type = 'text'
                    placeholder = 'Movie Director'
                    name = 'movie-director'
                    value = {movie.director}
                    onChange = {handleChange}
                 />
                <input 
                    type = 'text'
                    placeholder = 'Movie Metascore'
                    name = 'movie-metascore'
                    value = {movie.metascore}
                    onChange = {handleChange}
                 />
                <input 
                    type = 'text'
                    placeholder = 'Movie Actors'
                    name = 'movie-actors'
                    value = {movie.actors}
                    onChange = {handleChange}
                 />
                 <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;