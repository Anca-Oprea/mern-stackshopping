import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navi extends Component {
	logOut(e) {
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push(`/`)
	}
	render() {
		const loginRegLink = (
			<ul className="navbar-nav align-right" >
				<li className="nav-item">
					<Link to="/register" className="nav-link">Register
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">Login
	               </Link>
				</li>
			</ul>
		)
		const userLink = (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/dashboard" className="nav-link">User
					</Link>
				</li>
				<li className="nav-item">
					<a href=" " onClick={this.logOut.bind(this)} className="nav-link">Logout
					</a>
				</li>
			</ul>
		)
		return (
			<div>
				{localStorage.usertoken ? userLink : loginRegLink}
			</div>
		)
	}
}
export default withRouter(Navi);