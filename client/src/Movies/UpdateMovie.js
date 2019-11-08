import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {
    const [movie, setMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    })
    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => {
                console.log(err)
            })
    },[])

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            props.history.push('/movies')
        .catch(err => {
            console.log(err)
        })
        })
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