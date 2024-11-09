import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../Utils/Constants'
import SubMenu from './SubMenu'
import FoodItem from './FoodItem'

const RestaurantMenu = () => {
    const { id } = useParams()
    const [menuData, setMenuData] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const data =await fetch(MENU_API + id)
            const json = await data.json()
            // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
            setMenuData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
        }
    getData();
    }, [])
  return (
      <div>
          {menuData && menuData.map((item) => {
              let arr = item.card.card.itemCards
              return (
                <div key={item.card.card.title}>
                  <SubMenu title={item.card.card.title} arr={arr} />
                </div>
              );
          })}
    </div>
  )
}

export default RestaurantMenu