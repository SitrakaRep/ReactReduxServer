import React from 'react';
import { Link } from 'react-router'


const PostContent = ({ post }) => {
    return (
        <div>
            <h2>Détails : {post.fullName}</h2>
            <p>Nom: {post.lastName}</p>
            <p>Prénom: {post.firstMidName}</p>
            <p>Date d'inscription : {post.enrollmentDate}</p>
            <p><Link to={`/`}>Retour à la liste</Link></p>
        </div>
    )
}

export default PostContent