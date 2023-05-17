import { addPermanentCustomOrder } from "./TransientState.js"


///////////html for new custom orders//////////////////////////////////////////
export const CustomOrders = async () => {
    let ordersHTML = ""

    const response = await fetch("http://localhost:8088/customerOrders?_expand=paint&_expand=interior&_expand=technology&_expand=wheels")
    const orders = await response.json()

    const ordersArray = orders.map(
        (order) => {
            const totalPrice = order.paint.price + order.wheels.price + order.interior.price + order.technology.price
            // To automatically format the number as currency
            const TotalPrice = totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<div id="${order.id}" class="order">Order #${order.id} ${order.paint.color} car with ${order.wheels.wheelType} wheels, ${order.interior.seatType} interior, and the ${order.technology.techPackage} for a total cost of ${TotalPrice}</div>`
        }
    )

    ordersHTML += ordersArray.join("")

    return ordersHTML
}









///////place order button html and click event below///////////////////////////////


//create click event for when the order button is clicked
const placeOrderBittonClicked = (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
        //add funtion here that makes the transient state permanent
        //why don't we need to await this function?
        addPermanentCustomOrder()
    }
}

document.addEventListener("click", placeOrderBittonClicked)



//create html for creating the place car order button
export const PlaceOrder = () => {
    return `<button id='orderButton'>Place Car Order</button>`
}