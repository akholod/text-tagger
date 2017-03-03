    import React, { Component } from 'react';

export default class ShowText extends Component {
    // mouseOnWord(className, e) {
    //     e.target.className = className || e.target.className;
    // }
    addTag(e) {
        const addedTag = e.target.innerHTML.replace(' ','').toLowerCase()
        if(this.props.tags.indexOf(addedTag) === -1) {
            this.props.addTag(addedTag);
        }
    }

    render() {
        let { text, tags } = this.props;
        return (
            <div className='show-text-component'>
                {text.map((paragraph, pi) => {
                     return (<p key={pi}>{
                            paragraph.split(' ').map((word, si) => {
                            return (
                                <span
                                    className={
                                        (tags.indexOf(word.toLowerCase()) === -1)?'':'tagged'
                                    }
                                    key={si}
                                    // onMouseEnter={this.mouseOnWord.bind(this, 'hovered')}
                                    // onMouseLeave={this.mouseOnWord.bind(this)}
                                    onClick={this.addTag.bind(this)}
                                    >
                                        { word  + ' '}
                                    </span>
                            )
                        })
                    } </p>)
                })}
            </div>
        )
    }
}
