class InfoGeneral{

    constructor(array, valeur = null,  id = null, idSpell = 0){
        this.array = array
        this.valeur = valeur
        this.id = id
        this.idSpell = idSpell
    }

    listName(section, infoLien){
            document.getElementById('content').innerHTML += `<h2>Voici Toutes les ${section}</h2>
            <div class="row" id="cl" style="margin-top: 30px">
            </div>`
            for(let i = 0; i < this.array.length; i++){
            document.getElementById('cl').innerHTML += `<div class="col-4">
            <a href="index.html?info=${infoLien}&${infoLien}=${this.array[i]['name']}&id=${i}&idSpell=${this.idSpell}">
            <button type="button" class="btn btn-outline-primary" style="margin: 10px">${this.array[i]['name']}</button>
            </a>
            </div>`
            }
    }

    insertion(elementId, contenu){
        document.getElementById(elementId).innerHTML += contenu
    }

    informationBoucler(array, content){
        let info = ""
        for(let i = 0; i < array.length; i++){
            info += `<p>${array[i][content]}</p>`
        }
        return info
    }

}

export default InfoGeneral