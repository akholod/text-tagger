import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../actions/tagsActions';
import * as textActions from '../actions/textActions';
import * as hoverTagActions from '../actions/hoverTagActions';
import AppHead from './AppHead';
import Tags from './ShowTags';
import Text from './ShowText';

class App extends Component {
    componentWillMount() {
        this.props.textActions.getStartText();
        this.props.tagsActions.getStartTags();
    }
    render() {
        let { text, tags, tagsActions , hoverTagActions, hoveredTag} = this.props;
        return(
            <div>
                <AppHead />
                <Tags
                    tags={tags}
                    removeTag={tagsActions.removeTag}
                    removeTagFromServer={tagsActions.removeTagFromServer}
                />
                <Text
                    text={text}
                    tags={tags}
                    addTag={tagsActions.addTag}
                    hoverTag={hoverTagActions.mouseOnTag}
                    hoveredTag={hoveredTag}
                    saveTag={tagsActions.saveTagOnServer}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        text: state.text,
        tags: state.tags,
        hoveredTag: state.hoverTag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tagsActions: bindActionCreators(tagsActions, dispatch),
        textActions: bindActionCreators(textActions, dispatch),
        hoverTagActions: bindActionCreators(hoverTagActions, dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
