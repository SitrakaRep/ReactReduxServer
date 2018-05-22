import axios from 'axios';
import { AT_POSTS } from './action-types'
const END_POINT = "http://localhost:5000"

export function readAllPost() {
    return (dispatch) => {
        axios.get(`${END_POINT}/api/students`).then((response) => {
            dispatch({ type: AT_POSTS.READ_ALL, payload: response.data.result })
        })
    }
}

export function readPost(id) {
    return (dispatch) => {
        axios.get(`${END_POINT}/api/students/details/${id}`).then((response) => {
            dispatch({ type: AT_POSTS.READ, payload: response.data })
        })
    }
}

export function deletePost(id) {
    return (dispatch) => {
        axios.post(`${END_POINT}/api/students/delete/${id}`).then((response) => {
            dispatch({ type: AT_POSTS.DELETE, payload: id })
        })
    }
}

export function createPost(post) {
    return (dispatch) => {
        axios.post(`${END_POINT}/api/students/create/`,
        {
            LastName: post.lastName,
            FirstMidName: post.firstMidName,
            EnrollmentDate: post.enrollmentDate,
        }
        ).then((response) => {
            dispatch({ type: AT_POSTS.CREATE, payload: response.data })
        })
    }
}