import {useState} from 'react';
import QuoteSection from "../quoteSection";
import useFetchCategories from "../hooks/useFetchCategories"
import './style.css'

export default function Categories() {
    const {categories, isLoading} = useFetchCategories();
    const [selectedCategory, setSelectedCategory] = useState();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    function handleClick(item) {
        return () => {
            setSelectedCategory(item);
        }
    }

    return (
        <main className="categories">
            <h1>Categories</h1>
            <div className="wrapperCategories">
                {categories.map((item, index) => {
                    return <button onClick={handleClick(item)} key={index}>{item}</button>;
                })}
            </div>
            <QuoteSection selectedCategory={selectedCategory}/>
        </main>
    );
}
