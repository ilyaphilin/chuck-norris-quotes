import useFetchQuote from "../hooks/useFetchQuote";
import Chuck from '../../assets/norris.png';
import './style.css'

export default function QuoteSection({selectedCategory}){
    const {quote, isLoading} = useFetchQuote(selectedCategory);

    if (isLoading) {
        return (
            <h2>Loading...</h2>
        );
    }

    return(
        <div className="quoteSection">
            <p className='quote'>{quote.value}</p>
            <img
                className="chuckImage"
                src={Chuck}
                alt="Chuck-Norris"
            />
        </div>
    );
}