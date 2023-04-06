import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
const {error,status} = useRouteError()
    console.log(error.message);
    return (
        <div>
            {error.message}
        </div>
    );
};

export default Error;