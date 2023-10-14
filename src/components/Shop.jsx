import { useEffect, useContext } from "react"
import { ShopContext } from "../context"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { Preloader } from "./Preloader"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

const Shop = () => {
    const {
        setGoods,
        order,
        isBasketShow,
        alertName,
        loading
    } = useContext(ShopContext)

    useEffect(() => {
         fetch('https://fortniteapi.io/v2/shop?lang=ru', {
        headers: {
            Authorization: '605b9199-5e28f980-31dfb32c-62bf66db',
        },
    }).then(response => response.json())
    .then(data => {
        setGoods(data.shop)
    })
    // eslint-disable-next-line
    }, [])
   
    return <main className="container content">
        <Cart quantity={order.length}/>
        {loading ? <Preloader/> : <GoodsList/>}
        {isBasketShow && <BasketList/>}
        {alertName && <Alert/>}
    </main>
}

export {Shop}