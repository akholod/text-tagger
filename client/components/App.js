import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../actions/tagsActions'
import AppHead from './AppHead';
import Tags from './ShowTags';
class App extends Component {
    addTag (e) {
        console.log(e.target.innerHTML);
        this.props.tagsActions.addTag('kjkj')
    }
    render() {
        console.log(this.props.text);
        return(
            <div>
                <AppHead />
                <Tags tags={this.props.tags}/>
                <h1>Hello new task!! {this.props.user}</h1>
                <button onClick={this.addTag.bind(this)}>Add tag</button>
                {this.props.text.split(' ').map((item, i) => {
                    return(
                        <span key={i}>{item}</span>
                    //     <p>
                    //         {item.map((i) => {
                    //             return(
                    //                 <span >{i}</span>
                    //             )
                    // })}</p>
                )
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        text: state.text,
        tags: state.tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tagsActions: bindActionCreators(tagsActions, dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
