import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../actions/tagsActions';
import * as textActions from '../actions/textActions';
import AppHead from './AppHead';
import Tags from './ShowTags';
import Text from './ShowText';

class App extends Component {
    addTag (e) {
        console.log(e.target.innerHTML);
        this.props.tagsActions.addTag('kjkj')
    }
    componentWillMount() {
        this.props.textActions.getStartText();
        this.props.tagsActions.getStartTags();
    }
    render() {
        return(
            <div>
                <AppHead />
                <Tags tags={this.props.tags}/>
                <button onClick={this.addTag.bind(this)}>Add tag</button>
                <Text text={this.props.text}/>
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
        tagsActions: bindActionCreators(tagsActions, dispatch),
        textActions: bindActionCreators(textActions, dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
