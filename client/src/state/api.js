import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'main',
    tagTypes: [],
    endpoints: (build) => ({
        postAiText: build.mutation({
            query: (payload) => ({
                url: "openai/text",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const { usePostAiTextMutation } = api;


// This JavaScript code is creating an API using the createApi function from the Redux Toolkit library. The API includes a single mutation endpoint called postAiText that sends a POST request to a URL "openai/text" with a request body containing a payload object.

// The createApi function takes several options including baseQuery, reducerPath, tagTypes, and endpoints. The baseQuery option specifies the base query function to use for all endpoints, and the endpoints option is a function that defines the API's endpoints.

// The code also exports a usePostAiTextMutation hook that can be used to send a mutation request to the postAiText endpoint. 