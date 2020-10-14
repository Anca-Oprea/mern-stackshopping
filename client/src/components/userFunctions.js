import axios from 'axios'

export const register = newUser => {
    return axios
        .post('api/users/register', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            password2: newUser.password2
        })
        .then(response => {
            console.log("Registered!")
        })
}

export const login = user => {
    return axios
        .post('api/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            return res.data
        })
        .catch(err => {
            console.log('Invalid username and password, ' + err)
        })
}
export const getUser = id => {
    return axios
        .get(`users/getuser/${id}`)
        .then(response => {
            return response
        })
        .catch(err => {
            return err
        })
}

export const getProfile = token => {
    return axios
        .get('users/profile', {
            headers: { Authorization: `${token}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}