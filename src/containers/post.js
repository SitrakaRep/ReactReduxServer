import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostContent from '../components/post-content'
import { readPost } from '../actions/index'

class Post extends Component {

    componentWillMount () {
        this.props.readPost(this.props.params.id)
    }

    renderPostContent() {
        const { post } = this.props;
        if (post) {
            return <PostContent post={post} />
        }
    }

    render() {
        return (
            <div>
                {this.renderPostContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.activePost
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ readPost }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
