import React from 'react';

export default (props) => {

    return (
        <ul>
            {props.tags.map((tag, i)=>{
                return (
                    <li key={i}>{tag}
                        <span
                            className='remove-tag-button'
                            id={tag}
                            >
                            x
                        </span>
                    </li>
                )
            })}
        </ul>

    )
}
