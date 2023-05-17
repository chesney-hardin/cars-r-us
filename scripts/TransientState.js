//we need the transient state to hold the options chosen for each order
let transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelsId": 0
}

//setter functions for storing options chosen in our transient state
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}
export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setWheelsChoice = (chosenWheels) => {
    transientState.wheelsId = chosenWheels
    console.log(transientState)
}

//function to make the transient state permanent with a POST request
export const addPermanentCustomOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    await fetch("http://localhost:8088/customerOrders", postOptions)

    document.dispatchEvent(new CustomEvent("newOrderPlaced"))

    transientState = {
        "paintId": 0,
        "interiorId": 0,
        "technologyId": 0,
        "wheelsId": 0
    }


}