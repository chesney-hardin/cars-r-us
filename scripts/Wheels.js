import { setWheelsChoice } from "./TransientState.js"

//change event for when a wheels option is chosen
const changeHandler = (changeEvent) => {
    if(changeEvent.target.id === "wheels") {
        const wheelsIdChosen = parseInt(changeEvent.target.value)
        setWheelsChoice(wheelsIdChosen)
    }
}

//listen for when the wheels option is changed
document.addEventListener("change", changeHandler)


//create html for displaying the wheels menu
export const Wheels = async () => {
    //fetch the wheels data from our local api
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json() 


    let wheelsHTML= `<select id="wheels">
        <option value="0">Select your wheels</option>`
        
    const wheelsArray = wheels.map( 
        (wheels) => {
            return `<option value="${wheels.id}">${wheels.wheelType}</option>`
        }
    )

    wheelsHTML+= wheelsArray.join("")
    wheelsHTML+= `</select>`

    return wheelsHTML
}