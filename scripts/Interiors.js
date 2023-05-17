//create html for displaying the interiors menu
export const Interiors = async () => {
    //fetch the interiors data from our local api
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json() 


    let interiorsHTML= `<select id="interiors">
        <option value="0">Select a interior option</option>`
        
    const interiorArray = interiors.map( 
        (interior) => {
            return `<option value="${interior.id}">${interior.seatType}</option>`
        }
    )

    interiorsHTML+= interiorArray.join("")
    interiorsHTML+= `</select>`

    return interiorsHTML
}