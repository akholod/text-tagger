import React, { Component } from 'react';

export default class ShowTags extends Component {
    removeTag(tag) {
        this.props.removeTag(tag);
        this.props.removeTagFromServer(tag);
    }

    render() {
        return (
            <div className='show-tags-component'>
                <h3>Existing tags</h3>
                <ul>
                    {this.props.tags.map((tag, index) => {
                        tag = tag.set('index', index);
                        return (
                            <li key={tag.get('_id')}>{tag.get('tagName')}
                                <span
                                    className='remove-tag-button'
                                    onClick={this.removeTag.bind(this, tag)}
                                    >
                                    x
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
