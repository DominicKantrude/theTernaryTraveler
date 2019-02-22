import API from "./ApiManager"
import {createSubmitHtml, createPlaceHtml, createInterestHtml } from "./htmlConstructor"
import {addDeleteInterestEventListener, addSubmitInterestEventListener} from "./eventListeneres"
API.GET("places").then(parsedPlaces => {
    document.querySelector("#locationSection").innerHTML = createSubmitHtml(parsedPlaces);
})

addSubmitInterestEventListener()
addDeleteInterestEventListener()

const populatePage = () => {
    API.GET("places").then(parsedPlaces => {
        document.querySelector("#output").innerHTML = "";
        parsedPlaces.forEach(place => {
            let html = "";
            API.GET(`interests?placeId=${place.id}`).then(parsedInterests => {
                return parsedInterests
            }).then(parsedInterests => {
                html += createPlaceHtml(place)

                parsedInterests.forEach(interest => {
                    html += createInterestHtml(interest);
                });
                html += "</section>"

                document.querySelector("#output").innerHTML += html;
            })
        })
    })
}
populatePage()

export default populatePage;
