import React, { Component } from 'react';

export default class ShowTags extends Component {
    removeTag(tag) {
        this.props.removeTag(tag);
        this.props.removeTagFromServer(tag);
    }

    render() {
        return (
            <ul>
                {this.props.tags.map((tag, index)=>{
                    tag.index = index;
                    return (
                        <li key={tag._id}>{tag.tagName}
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
        )
    }
}
