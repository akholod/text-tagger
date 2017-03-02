import React from 'react';

export default (props) => {
    return (
        <ul>
            {props.tags.map((tag, i)=>{
                return <li key={i}>{tag}</li>
            })}
        </ul>

    )
}
