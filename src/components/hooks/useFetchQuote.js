import {useEffect, useState} from 'react';

async function fetchQuoteByCategory(category) {
    const url = category === 'random' ?
        `https://api.chucknorris.io/jokes/random` :
        `https://api.chucknorris.io/jokes/random?category=${category}`;
    const response = await fetch(url);
    return await response.json();
}

export default function useFetchQuote(category) {
    const initialValue = category===undefined?'random':category;

    const [quote, setQuote] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const data = await fetchQuoteByCategory(initialValue);
            const quoteData = {
                id: data.id,
                value: data.value
            };
            setQuote(quoteData);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return {quote, isLoading};
}