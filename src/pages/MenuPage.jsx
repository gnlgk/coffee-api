import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/scss/style.scss';
import Main from '../components/section/Main';

const MenuPage = () => {
    const { coffeeId } = useParams();
    const [coffeeData, setCoffeeData] = useState([]);
    const [error, setError] = useState(null);
    const [visibleLinks, setVisibleLinks] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoffeeData = async () => {
            try {
                const today = new Date().toISOString().split('T')[0];
                const response = await fetch(`https://raw.githubusercontent.com/gnlgk/menu-coffee/main/${coffeeId}/menu${coffeeId}_${today}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCoffeeData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoffeeData();
    }, [coffeeId]);

    const showLink = (index) => {
        setVisibleLinks(prevState => ({
            ...prevState,
            [index]: true
        }));
    };

    const getImageUrl = (url) => {
        if (url.startsWith('http://')) {
            return url;
        }
        return url.replace('http://', 'https://');
    };

    if (loading) {
        return <div className="loading">메뉴를 불러오는 중입니다...</div>;
    }

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
                                <div className="img"
                                    style={{ backgroundImage: `url(${getImageUrl(coffee.imageURL)})` }}
                                ></div>
                                <div className="content">
                                    <h3 className='title'>{coffee.title}</h3>
                                    <div className="tooltip">
                                        <h4>{coffee.title}</h4>
                                        <div className='titleeng'>{coffee.titleE}</div>
                                        <div className='desc'>{coffee.description}</div>
                                        {coffee.information && (
                                            <div className='info'>
                                                <strong>영양성분</strong>
                                                {Object.entries(coffee.information).map(([key, value]) => (
                                                    <div key={key}>
                                                        {key} : {value}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {visibleLinks[index] ? (
                                            <a href={coffee.address} target="_blank" rel="noopener noreferrer" className='address'>{coffee.address}</a>
                                        ) : (
                                            <button onClick={() => showLink(index)} className="button-toggle">
                                                더 보기
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>메뉴가 없습니다.</div>
                )}
            </div>
        </Main>
    );
};

export default MenuPage;
