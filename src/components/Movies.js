import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

export default class Movies extends Component {
    state = {movies: []};

    componentDidMount() {
        this.setState({
            movies: [
                {id:1, title: "Forest Gump", runtime: 142},
                {id:2, title: "The Godfather", runtime: 175},
                {id:3, title: "Spiderman 2", runtime: 153},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose Movie</h2>

                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            <Link to={`/movies/${m.id}`}>{m.title}</Link>
                            {m.title}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}