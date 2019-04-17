import React from 'react';
import axios from 'axios'


class allMovies extends React.Component {

    componentDidMount() {
        //GET REQUEST
        axios.get ('http:/localhost:5003/movies')
        .then(response => response.data)
        .then(movies => {
            
        })
    }

    render () {
        return ('all movies')
    }
}
export default allMovies;