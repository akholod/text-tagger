import React from 'react';

export default (props) => {
    return (
        <div className='show-text-component'>
            {props.text.map((paragraph, pi) => {
                 return (<p key={pi}>{
                        paragraph.split(' ').map((word, si) => {
                        return (<span key={si}>{ word } </span>)
                    })
                } </p>)
            })}
        </div>
    )
}
