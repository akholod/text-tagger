    import React, { Component } from 'react';

export default class ShowText extends Component {
    addTag(e) {
        const addedTag = e.target.innerHTML.replace(/[ \W]/g,'').toLowerCase();
        const tagNames = this.props.tags.toJS().map(item => item.tagName)
        if(tagNames.indexOf(addedTag) === -1) {
            console.log(tagNames);
            this.props.addTag(addedTag);
            this.props.addTagOnServer(addedTag);
        }
    }
    mouseOnWord(e) {
        const hoverTag = e.target.innerHTML.replace(/[ \W]/g,'').toLowerCase();
        this.props.hoverTag(hoverTag);
    }
    mouseLeaveText() {
        this.props.hoverTag(null);
    }

    render() {
        let { text, tags, hoveredTag } = this.props;
        tags = tags.map(tag => tag.get('tagName'));
        return (
            <div className='show-text-component' onMouseLeave={this.mouseLeaveText.bind(this)}>
                <h3 className='text-center'>Move the cursor over the word to highlight similar words. Click to save as a tag.</h3>
                <div className='text'>
                    {text.map((paragraph, pi) => {
                         return (<p key={pi}>{
                                paragraph.split(' ').map((word, si) => {
                                return (
                                    <span
                                        className={
                                            (tags.indexOf(word.replace(/[ \W]/g,'').toLowerCase()) === -1)
                                            ?
                                            (hoveredTag === word.replace(/[ \W]/g,'').toLowerCase()) ? 'hovered' : ''
                                            :
                                            'tagged'
                                        }
                                        key={si}
                                        onMouseEnter={this.mouseOnWord.bind(this)}
                                        onClick={this.addTag.bind(this)}
                                        >
                                            { word  + ' '}
                                        </span>)
                            })
                        } </p>)
                    })}
                </div>
            </div>
        )
    }
}
