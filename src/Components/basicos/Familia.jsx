import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Pedro" {...props} />
            <FamiliaMembro nome="Jorgina" {...props} />
            <FamiliaMembro nome="Gustavo" {...props}/>
        </div>
    )
}