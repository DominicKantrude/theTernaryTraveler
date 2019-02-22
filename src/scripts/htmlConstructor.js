const createSubmitHtml = (parsedPlaces) =>{
    let html = `
    <select name="locations" id="locations">
    `
    parsedPlaces.forEach(place => {
        html += `
        <option value="${place.id}">${place.name}</option>
        `
    });
    html += `
    </select>
    `
    return html;
}

const createPlaceHtml = (place) =>{
    return `
    <section id="place--${place.id}" class="placeSection">
    <section class="cardHeader">
    <p>${place.name}</p>
    <p>${place.visa_required ? "Visa required" : "No visa required"}</p>
    </section>
    <hr>
    <h3>Interests</h3>
   `
}


const createInterestHtml = (interest) =>{
    return `
    <section id="interest--${interest.id}" class="interestSection">
    <p>Interest Name: ${interest.name}</p>
    <p>Description: ${interest.description}</p>
    <button id="interestDelete--${interest.id}">Delete</button>
    </section>
    `
}

export {createSubmitHtml,createPlaceHtml,createInterestHtml}