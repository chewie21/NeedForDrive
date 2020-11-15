import {useEffect, useState} from "react";
import {getRequest} from "../Functions/RequestsToApiFactory";

export const useGetRequest = (url) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getRequest(url)
            .then(
                response => {
                    setResponse(response);
                    setLoading(false)
                },
                error => {
                    setError(true);
                    setLoading(false);
                }
            )
    },[url]);

    return {response, error, loading}
}