import React, { Component } from 'react';
import Genre from './Genre';
import axios from 'axios';

/* let genres = [
    { genre: 'Acción' },
    { genre: 'Animación' },
    { genre: 'Aventura' },
    { genre: 'Ciencia Ficción' },
    { genre: 'Comedia' },
    { genre: 'Documental' },
    { genre: 'Drama' },
    { genre: 'Fantasia' },
    { genre: 'Infantiles' },
    { genre: 'Musical' }
] */

class GenresInDb extends Component {

    constructor(){
        super()
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        axios('http://localhost:3001/api/genres')
        .then(response => {
            this.setState({genres: response.data.data})
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.genres !== [] ? this.state.genres.map((genre, index) => {
                                        return <Genre genre={genre.name} key={index} />
                                    }) : <h2>Cargando...</h2>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default GenresInDb;