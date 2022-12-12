import FetchData from "../FetchData.js"

class Spells{

        constructor(array, valeur = null, id = null){
            this.array = array
            this.valeur = valeur
            this.id = id
        }

        listName = async () => {
            if(this.valeur === null){
                document.getElementById('content').innerHTML += `<h2>Voici Toutes les Sorts</h2>
                <div class="row" id="cl" style="margin-top: 30px">
                </div>`
                let id = this.id * 1 
                let limit = id + 21
                if(limit > 319){
                    limit = 319
                }
                for(id; id < limit; id++){
                document.getElementById('cl').innerHTML += `<div class="col-4">
                <a href="index.html?info=spells&spells=${this.array[id]['index']}&id=${this.id * 1}">
                <button type="button" class="btn btn-outline-primary" style="margin: 10px">${this.array[id]['name']}</button>
                </a>
                </div>`
                }
                const test = this.id * 1
                let before = test - 21
                let after = test + 21

                document.getElementById('content').innerHTML += `<div class="row">
                                                                    <div class="col-4" id="before">
                                                                    </div>
                                                                    <div class="col-4">
                                                                    </div>
                                                                    <div class="col-4" id="after"> 
                                                                    </div>
                                                                </div>`
                if(before >= 0){
                    const nameBefore = this.array[before]['name']
                    document.getElementById('before').innerHTML += `<a href="index.html?info=spells&classe=${nameBefore}&id=${before}">
                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">Précédent</button>
                    </a>`
                }
                if(after <= this.array.length){
                    const nameAfter = this.array[after]['name']
                    document.getElementById('after').innerHTML += `<a href="index.html?info=spells&id=${after}">
                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">Suivant</button>
                    </a>`
                }

            }
            if(this.valeur != null){
                document.getElementById('content').innerHTML += `<a href="index.html?info=spells&id=${this.id}">
                                                                <button type="button" class="btn btn-outline-primary" style="margin: 10px">Retour</button>
                                                                </a>`    
                let info = []
                const newData = new FetchData()
                const valeur = this.valeur.toLowerCase()
                info = await newData.fetchDatav3('https://www.dnd5eapi.co/api/spells/'+valeur)
                console.log(info)
                document.getElementById('content').innerHTML += `<h2>${info['name']}</h2>`
                if(info['attack_type']){
                    document.getElementById('content').innerHTML +=`<p>C'est a sort de type: ${info['attack_type']}</p>`
                }
                document.getElementById('content').innerHTML += `<p>sa porté est de: ${info['range']}</p>
                                                                <p>Son d'incantation prend: ${info['casting_time']}</p>
                                                                <p>Sa durer est de: ${info['duration']}</p>`
                if(info['level'] > 0){
                    document.getElementById('content').innerHTML += `<p>C'est un sort de NV${info['level']}</p>`
                }
                if(info['ritual']){
                    document.getElementById('content').innerHTML += `<p>Ce sort est un rituel</p>`
                }
                if(info['material']){
                    document.getElementById('content').innerHTML += `<p>Ce sort a besoin de matériaux qui sont: ${info['material']}</p>`
                }
                document.getElementById('content').innerHTML += `<h3>Description du sort</h3>`
                for(let i = 0; i < info['desc'].length; i++){
                    document.getElementById('content').innerHTML += `<p>${info['desc'][i]}</p>`
                }
                document.getElementById('content').innerHTML += `<h3>Les Classes qui peuvent utilisé se sort</h3>
                                                                 <div id="classes"></div>`
                for(let i = 0; i < info['classes'].length; i++){
                    document.getElementById('classes').innerHTML += `<div class="row">
                                                                    <a href="index.html?info=classes&classe=${info['classes'][i]['name']}">
                                                                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">${info['classes'][i]['name']}</button>
                                                                    </a>
                                                                    </div>`
                }

            }
        }

}

export default Spells