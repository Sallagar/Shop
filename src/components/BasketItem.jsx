import { useContext } from "react"
import { ShopContext } from "../context"
const BasketItem = (props) => {
    const {
        id,
        name,
        sellPrice,
        quantity,
    } = props

    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)

    return <li className="collection-item"> 
        {name} 
            <i className="material-icons basket-quatity" 
                onClick={() => decQuantity(id)}>remove
            </i> 
        x{quantity} 
            <i className="material-icons basket-quatity" 
                onClick={() => incQuantity(id)}>add
            </i> 
        = {sellPrice * quantity} руб.
        <span 
            className="secondary-content" 
                onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete">clear</i>
        </span>
    </li>
}

export {BasketItem} 

