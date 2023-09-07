const GoodsItem = (props) => {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        finalPrice: price,
        displayAssets,
        addToBasket = Function.prototype
    } = props

    console.log (props)

    const background = displayAssets[0].background

    return <div className="card">
        <div className="card-image">
            <img src={background} alt={name}/>
            <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className="btn blue darken-1 white-text" onClick={() => addToBasket ({
                id,
                name,
                price
            })}>Купить</button>
            <span className="right">{price}</span>
        </div>
    </div>
}

export {GoodsItem}


            