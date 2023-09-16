import { useContext } from "react"
import { ShopContext } from "../context"
import { BasketItem } from "./BasketItem"

const BasketList = () => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.sellPrice * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <li className="collection-item active blue darken-1">Корзина 
            <i className="material-icons basket-close right" 
                onClick={handleBasketShow}>close
            </i> 
        </li>
        {
            order.length ? order.map(item => (
                <BasketItem  
                key={item.id}  
                {...item}
                />  
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active blue darken-1">
            Общая стоимость: {totalPrice} руб.
        </li>
        <li className="collection-item">
            <button className="btn-small blue darken-1 left">
                Оформить
            </button>
        </li>
        
    </ul>
}

export {BasketList}