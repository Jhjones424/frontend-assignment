import logo from '../images/logo.svg';
import React from 'react';
import styled from 'styled-components';
import MovieGrid from './MovieGrid.js';
import axios from 'axios';

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Container = styled.div`
	margin-left: 7%;
	margin-right: 7%;
`

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allMovies : [],
			displayed : []
		}
	}

	componentDidMount() {
		let currDate = new Date().toISOString();
		console.log('currDate:', currDate);
		let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=primary_release_date.desc&primary_release_date.lte=${currDate}`
		axios.get(endpoint)
			.then(data => console.log('data:', data))
	}

	render () {
		return (
			<Container>
				<Header>
					<img src={logo} alt="Timescale" />
					<div>Search Bar</div>
				</Header>
				<hr></hr>
				<div> Most Recent Movies</div>
				<MovieGrid movies={this.state.displayed}/>
			</Container>
		)
	}

}

export default App;
