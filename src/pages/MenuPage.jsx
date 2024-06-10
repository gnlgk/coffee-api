import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/scss/style.scss';
import Main from '../components/section/Main';

const MenuPage = () => {
    const { coffeeId } = useParams();
    const [coffeeData, setCoffeeData] = useState([]);
    const [error, setError] = useState(null);
    console.log(coffeeId)
    useEffect(() => {
        const fetchCoffeeData = async () => {
            try {
                const today = new Date().toISOString().split('T')[0];
                const response = await fetch(`https://raw.githubusercontent.com/gnlgk/coffee-menu/main/${coffeeId}/menu${coffeeId}_2024-05-28.json`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCoffeeData(result);
            } catch (error) {
                setError(error);
            }
        };
        fetchCoffeeData();
    }, [coffeeId]);

    if (error) {
        return <div>채널 정보를 불러오는 중에 에러가 발생했습니다: {error.message}</div>;
    }

    return (
        <Main>
            <div className='info__box container'>
                {coffeeData.length > 0 ? (
                    coffeeData.map((coffee, index) => (
                        <div className='coffee__Box' key={index}>
                            <div className="list__div">
                                <img className='img' src={coffee.imageURL} alt={coffee.title} />

                                <h3 className='title'>{coffee.title}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>메뉴를 불러오는 중입니다...</div>
                )}
            </div>
        </Main>
    );
};

export default MenuPage;