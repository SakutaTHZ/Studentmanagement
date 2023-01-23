function hidePopUp() {
    var prompt = document.querySelector(".deletePrompt")
    prompt.remove()
}

function showPopUp(id) {
    var div = document.createElement("div");
    div.classList.add("deletePrompt")
    div.innerHTML = `
    <div class="fullbody"  onclick="hidePopUp()"></div>
    <div class="deletebox">
        <h3>Are u sure u want to delete <span class="idToAction">${id}</span></h3>
        <div class="buttonbox">
            <button th:href="todelete?${id}" class="yes">
                Yes
            </button>
            <button class="no" onclick="hidePopUp()">
                No
            </button>
        </div>
    </div>
    `
    document.body.appendChild(div)
}