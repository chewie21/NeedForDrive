import {useEffect, useState} from "react";
import {getRequest} from "../Functions/RequestsToApiFactory";
import {secret} from "../Environments/ApiFactoryUrls";

export const useGetRequest = (url, token = secret) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const refreshResponse = () => {
        setLoading(true);
        getRequest(url, token)
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
    }

    useEffect(() => {
        refreshResponse();
    },[url]);

    return {response, error, loading, refreshResponse}
}