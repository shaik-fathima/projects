import React, { useEffect } from 'react';
import {useLoaderData} from "react-router-dom"

function Github() {

    const data =  useLoaderData()
        // const [data, setData] = React.useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Arun-cloud-dev')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            {data && (
                <>
                    <p>Github followers: {data.followers}</p>
                    <img src={data.avatar_url} width={300} alt='' />
                </>
            )}
        </div>
    );
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Arun-cloud-dev')
    return response.json()
}