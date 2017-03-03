import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../actions/tagsActions';
import * as textActions from '../actions/textActions';
import AppHead from './AppHead';
import Tags from './ShowTags';
import Text from './ShowText';

class App extends Component {
    componentWillMount() {
        this.props.textActions.getStartText();
        this.props.tagsActions.getStartTags();
    }
    render() {
        let { text, tags, tagsActions } = this.props;
        return(
            <div>
                <AppHead />
                <Tags tags={tags} removeTag={tagsActions.removeTag}/>
                <Text text={text} tags={tags} addTag={tagsActions.addTag}/>
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
