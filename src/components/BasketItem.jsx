const BasketItem = (props) => {
    const {
        id,
        name,
        sellPrice,
        quantity,
        removeFromBasket = Function.prototype
    } = props
    return <li className="collection-item">
        {name} x{quantity} = {sellPrice * quantity} руб.
        <span 
            className="secondary-content" 
            onClick={() => removeFromBasket(id)}
        >
            <i className="material-icons basket-delete">clear</i>
        </span>
    </li>
}

export {BasketItem} 

