import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../assets/scss/style.scss'
const List = () => {
    const [coffeeData, setcoffeeData] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedCafe, setSelectedCafe] = useState('caffebene')
    useEffect(() => {
        const fetchcoffeeData = async () => {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/gnlgk/coffee-menu/main/${selectedCafe}/menu${selectedCafe}_${selectedDate.toISOString().slice(0, 10)}.json`)
                const data = await response.json()
                setcoffeeData(data)
                console.log(data)
            } catch (error) {
                console.error('Error fetching card data:', error)
            }
        }
        fetchcoffeeData()
    }, [selectedDate, selectedCafe])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    const handleCardCompanyChange = (event) => {
        console.log(event.target.value)
        setSelectedCafe(event.target.value)
    }
    return (
        <div className='info__box'>
            <div className='dateBox'>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                />
                <select value={selectedCafe} onChange={handleCardCompanyChange}>
                    <option value="caffebene">카페베네</option>
                    <option value="canbus">캔버스</option>
                    <option value="coffeebanhada">커피에반하다</option>
                    <option value="coffeebay">커피베이</option>
                    <option value="compose">컴포즈</option>
                    <option value="dessert39">디저트39</option>
                    <option value="gurunaru">그루나루</option>
                    <option value="hollys">할리스</option>
                    <option value="mammoth">메머드</option>
                    <option value="paiks">빽다방</option>
                    <option value="starbucks">스타벅스</option>
                    <option value="theventi">더벤티</option>
                    <option value="tomntom">탐앤탐</option>
                </select>
            </div>
            {coffeeData.map((card, index) => (
                <div key={index} className='cardBox'>
                    <img className='card__img' src={card.cardImg} alt="" />
                    <div className='card__detail'>
                        <h3 className='card__title'>{card.cardName}</h3>
                        <p className='card__desc'>{card.cardAnnual}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default List