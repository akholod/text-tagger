import React, { Component } from 'react';

export default class ShowTegs extends Component {
    removeTag(tag) {
        this.props.removeTag(tag)
    }
    render() {
        return (
            <ul>
                {this.props.tags.map((tag, i)=>{
                    return (
                        <li key={i}>{tag}
                            <span
                                className='remove-tag-button'
                                onClick={this.props.removeTag.bind(this, tag)}
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
