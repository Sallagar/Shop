import { BasketItem } from "./BasketItem"

const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket,
        incQuantity,
        decQuantity,
    } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.sellPrice * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <li className="collection-item active blue darken-1">Корзина <i className="material-icons basket-close right" onClick={handleBasketShow}>close</i> </li>
        {
            order.length ? order.map(item => (
                <BasketItem  
                key={item.id}  
                {...item}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}/>  
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item">Общая стоимость: {totalPrice} руб.</li>
        
    </ul>
}

export {BasketList}