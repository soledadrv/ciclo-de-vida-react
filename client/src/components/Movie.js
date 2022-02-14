import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

class Movie extends Component {

	constructor() {
		super()
		this.state = {
			movies: []
		}
	}

	componentDidMount() {
		axios('http://localhost:3001/api/movies')
		.then(response => {
			this.setState({ movies: response.data.data})
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
								<tbody>
									{this.state.movies !== [] ? this.state.movies.map(movie => {
										return <MovieList
										key={movie.title + movie.id}
										id={movie.id}
										title={movie.title}
										rating={movie.rating}
										awards={movie.awards}
										length={movie.length}
										/>
									}) : <h2>Cargando...</h2>}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default Movie;