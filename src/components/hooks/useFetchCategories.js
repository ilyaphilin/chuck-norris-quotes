import { useEffect, useState } from 'react';

async function fetchCategories() {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    return await response.json();
}

export default function useFetchCategories() {
    const [categories, setCategories] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const categoriesData = await fetchCategories();
            categoriesData.push('random');
            setCategories(categoriesData);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return { categories, isLoading };
}