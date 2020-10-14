import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import classnames from "classnames";
import { registerUser } from '../../actions/authActions';
import PropTypes from "prop-types";

class Register extends React.Component {

    constructor() {
        super()
        this.state =
        {
            firstName: '',
            lastName: '',
            email: "",
            password: "",
            password2: "",
            errors: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        //If logged in and user navigates lo Login page, should redirect them to dascboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/")
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const NewUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(NewUser, this.props.history);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <h2>User Registration</h2>
                <p>
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link></p>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <p>   Please fill in all the required fields
                 to create a new user account.</p>
                    <p className="grey-text text-darken-1">
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.firstName
                                })}
                                required
                                onChange={this.handleChange} />
                            {errors.firstName && (<div className="invalid-feedback">{errors.firstName}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.lastName
                                })}
                                required
                                onChange={this.handleChange} />
                            {errors.lastName && (<div className="invalid-feedback">{errors.lastName}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="email"
                                placeholder="Email adresse"
                                name="email"
                                value={this.state.email}
                                className={classnames('form-control  form-control-lg', {
                                    'is-invalid': errors.email
                                })}
                                required
                                onChange={this.handleChange} />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                className={classnames('form-control  form-control-lg', {
                                    'is-invalid': errors.password
                                })}
                                required
                                onChange={this.handleChange} />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={this.state.password2}
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.password2
                                })}
                                required
                                onChange={this.handleChange} />
                            {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register User
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.string.isRequired,
    errors: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));