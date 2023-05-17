/* Define a function that generates all the HTML.
Import all the necessary functions from other modules that generate pieces of the HTML
Don't forget to classify functions as asyn and use keyowrd await when needed
Will probably need to include event listeners to re-render the HTML when changes are made
*/

import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

const container = document.querySelector("#container")

const render = async () => {
    //define variables from imported functions:
    //paints drop down
    const paintsHTML = await Paints()
    //interior drop down
    const interiorsHTML = await Interiors()
    //wheels drop down
    const wheelsHTML = await Wheels()
    //technologies drop down
    const technologiesHTML = await Technologies()
    //place order button
    //custom car orders
    const allTheHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints menu">
                <h2>Paints</h2>
                ${paintsHTML}
            </section>
            <section class="choices__interiors menu">
                <h2>Interior</h2>
                ${interiorsHTML}
            </section>
            <section class="choices__wheels menu">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>
            <section class="choices__technologies menu">
                <h2>Technologies</h2>
                ${technologiesHTML}
            </section>
        </article>

        <article class="button">

        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>

        </article>

    `

    container.innerHTML = allTheHTML
}

render()