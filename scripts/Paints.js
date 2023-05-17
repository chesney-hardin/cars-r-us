
//create html for displaying the paints menu
export const Paints = async () => {
    //fetch the paints data from our local api
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json() 


    let paintsHTML= `<select id="paints">
        <option value="0">Select a paint color</option>`
        
    const paintArray = paints.map( 
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    paintsHTML+= paintArray.join("")
    paintsHTML+= `</select>`

    return paintsHTML
}