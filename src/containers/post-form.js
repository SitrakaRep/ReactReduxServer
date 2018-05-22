import React, { Component } from 'react';
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { createPost } from '../actions/index'

const formConfig = {
    form: 'createPostForm',
    fields: ['lastName', 'firstMidName', 'enrollmentDate'],
    validate: validate,
    initialValues: { lastName: 'Alexander'}
}

class PostForm extends Component {
    render() {
        const { fields: { lastName, firstMidName, enrollmentDate }, handleSubmit, errors } = this.props;

        return (
            <div>
                <h1>Nouveau Post</h1>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                    <div className={`form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
                        <label>Nom</label>
                        <input className="form-control" type="text" {...lastName} />
                        <div>{lastName.touched && errors.lastName}</div>
                    </div>
                    <div className={`form-group ${firstMidName.touched && firstMidName.invalid ? 'has-danger' : ''}`}>
                        <label>Prénom</label>
                        <input className="form-control" type="text" {...firstMidName} />
                        <div>{firstMidName.touched && errors.firstMidName}</div>
                    </div>
                    <div className={`form-group ${enrollmentDate.touched && enrollmentDate.invalid ? 'has-danger' : ''}`}>
                        <label>Date d'inscription</label>
                        <input className="form-control" type="text" {...enrollmentDate} />
                        <div>{enrollmentDate.touched && errors.enrollmentDate}</div>
                    </div>
                    <Link className="button_space" to={`/`}>
                        <button className="btn btn-danger">Retour</button>
                    </Link>
                    <button className="btn btn-primary" type="submit" disabled={this.props.invalid}>Créer</button>

                </form>
            </div>
        )
    }

    createPost(post) {
        this.props.createPost(post)
        browserHistory.push('/')
    }
};

function validate(values) {
    const errors = {};
    if (!values.lastName) {
        errors.lastName = 'Veuillez remplir le nom'
    }
    if (!values.firstMidName) {
        errors.firstMidName = 'Veuillez remplir le prénom'
    }
    if (!values.enrollmentDate) {
        errors.enrollmentDate = 'Veuillez remplir la date'
    }

    return errors
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ createPost }, dispatch)
});

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));