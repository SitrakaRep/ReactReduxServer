import React, { Component } from 'react'
import { Link } from 'react-router'

const PostListItem = (props) => {
    const { post } = props
    return (
        <tr>
            <td>{post.lastName}</td>
            <td>{post.firstMidName}</td>
            <td>
                {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(post.enrollmentDate.firstSale)}
            </td>
            <td>
                <Link to={`post/${post.id}`}>
                    <button className="btn btn-warning">Détails</button>&nbsp;
                </Link>
                <button className="btn btn-danger" onClick={() => deletePost((post))}>Supprimer</button>
            </td>
        </tr>
    )

    function deletePost(post) {
        props.deletePostCallBack(post)
    }
}

export default PostListItem;