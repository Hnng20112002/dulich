/* eslint-disable @typescript-eslint/no-explicit-any */
// fetcher.ts

import axios from "axios";

const fetcher = async (url: string): Promise<any> => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzkwOTExZWUtNWJlNi00ODNmLWFhMzUtNWVlNzdkYWQ3ZjBjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4MTk0NTMyLCJleHAiOjE3MTgxOTU0MzJ9.rfI4aPBKLFA7pABgNwEtUTil19jeaxFWjsGMaU72RAg';

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
};

export const fetcherLocale = async (url: string): Promise<object> => {
    if (window !== undefined) {

        const response = await fetch(`${window.location.origin}/${url}`);

        return response.json();
    }

    return {}
};


export default fetcher;
