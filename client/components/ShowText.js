    import React, { Component } from 'react';

export default class ShowText extends Component {
    // mouseOnWord(className, e) {
    //     e.target.className = className || e.target.className;
    // }
    addTag(e) {
        console.log(e.target.innerHTML);
        this.props.addTag(e.target.innerHTML.replace(' ',''));
    }

    render() {
        console.log(this.props.tags +'render');
        return (
            <div className='show-text-component'>
                {this.props.text.map((paragraph, pi) => {
                     return (<p key={pi}>{
                            paragraph.split(' ').map((word, si) => {
                            return (
                                <span
                                    className={
                                        (this.props.tags.indexOf(word.toLowerCase()) === -1)?'':'tagged'
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
