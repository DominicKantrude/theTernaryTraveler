import API from "./ApiManager"
import populatePage from "./main"

const addDeleteInterestEventListener=()=>{
    document.querySelector("#output").addEventListener("click", function (event) {
        let sectionTarget = event.target.id.split("--")[0]
        let id = parseInt(event.target.id.split("--")[1])

        if (sectionTarget === "interestDelete") {
            if (window.confirm("Are you sure you want to delete this interest?")) {
                API.DELETE(`interests/${id}`).then(() => {
                    populatePage();
                })
            }
        }
    })
}

const addSubmitInterestEventListener = () =>{
    document.querySelector("#submitNewInterest").addEventListener("click", function (event) {

        let interest = {
            placeId: document.querySelector("#locations").value,
            name: document.querySelector("#name").value,
            description: document.querySelector("#description").value
        }
        API.POST("interests", interest).then(() => {
            populatePage()
        })

    })
}

export {addDeleteInterestEventListener, addSubmitInterestEventListener}