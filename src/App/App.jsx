import React, { useEffect, useState } from 'react'
import './App.css';
import AppHeader from '../app-header/app-header';
import Burger from '../burger/burger';
import api from '../utils/api';


function App() {
    const [cards, setCards] = useState([])
   const handleGetIngredients = () => {
       api.getInfo()
           .then((res) => {
               const arr = res.data;
               setCards(arr)
           })
           .catch(error => console.log(`Ошибка: ${error}`))
    }

    useEffect(() => {
        handleGetIngredients();
    }, []);
console.log('cards', cards)
    return (
        <main className="content">
            <AppHeader/>
           <Burger cards={cards}/>
        </main>
    );
}

export default App;
