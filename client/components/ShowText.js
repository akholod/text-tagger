    import React, { Component } from 'react';

export default class ShowText extends Component {
    addTag(e) {
        const addedTag = e.target.innerHTML.replace(/[ \W]/g,'').toLowerCase();
        if(this.props.tags.indexOf(addedTag) === -1) {
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
                <h3>Tex document:</h3>
                <p>Move the cursor over the word to highlight similar words. Click to save as a tag.</p>
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
        )
    }
}
