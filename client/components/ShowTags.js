import React from 'react';

export default (props) => {
    console.log(props.tags);
    return (
        <ul>
            {props.tags.map((tag, i)=>{
                return <li key={i}>{tag}</li>
            })}
        </ul>

    )
}
