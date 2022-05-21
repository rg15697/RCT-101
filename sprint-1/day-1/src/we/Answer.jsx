import React from 'react';

export const Answer1 = (props) => {
    return <div>
        Hello {props.name} {props.place}
    </div>
}
export const Answer2 = ({name,place,infoX}) => {
    return <div>
        Hello {name} ! 
        where are you from?  {place} 
        <div>
        {infoX.a} + {infoX.b}
        </div>
    </div>
}