import React, {Component, Fragment} from "react";

export default class OneMovie extends Component {

    state = { movie : {}};

    componentDidMount() {
        this.setState({
            movie: {
                id: this.props.match.params.id,
                title: "Some movie",
                runtime: 150
            }
        })
    }

    render() {

        return (
            <Fragment>
                <h2>Movie: {this.state.movie.id}</h2>
                <table className="table table-compact table-striped">
                    <tbody>
                    <tr>
                        <td><b>Title: </b></td>
                        <td>{this.state.movie.title} </td>
                    </tr>
                    <tr>
                        <td><b>Runtime: </b></td>
                        <td>{this.state.movie.runtime}</td>
                    </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}