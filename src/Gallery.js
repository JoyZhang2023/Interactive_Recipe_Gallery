import React, { useState } from 'react';

const recipes = [
    {id: 1, title: "Spaghetti Carbonara", description: "This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower.", image: "https://example.com/carbonara.jpg"},
    {id: 2, title: "Baguette", description: "These crunchy baguettes feature a chewy interior riddled with holes, and a crisp, deep-golden crust.", image: "https://example.com/Baguette.jpg"},
    {id: 3, title: "French Toast", description: "French toast is a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried. Alternative names and variants include eggy bread, Bombay toast, gypsy toast, and poor knights.", image: "https://example.com/French Toast.jpg"},
    {id: 4, title: "Frech Fries", description: "French fries, chips, finger chips, french-fried potatoes, or simply fries are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium or France.", image: "https://example.com/Frech Fries.jpg"},
    {id: 5, title: "Penne Alla Vodka", description: "This is the best creamy and bright vodka sauce any of us in the test kitchen have ever had. The secret? Tomato paste.", image: "https://example.com/Penne Alla Vodka.jpg"}
];

export default function Gallery () {
    const [index, setIndex] = useState(0);

    const handlePrevClick = () => {
        if(index>0 && index <5) {
            setIndex(index-1);
        }else{
            alert("This is the first page");
        }
    };

    const handleNextClick = () => {
        if(index>=0 && index <4) {
            setIndex(index+1);
        }else{
            alert("This is the last one.");
        }

    };

    return (
        <div>
            <button onClick={handlePrevClick}>
                    Previous</button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <p>{recipes[index].image}</p>
            <h2>{recipes[index].title}</h2>
            <p>{recipes[index].description}</p>
        </div>
    );
}