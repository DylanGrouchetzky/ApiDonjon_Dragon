import FetchData from "../FetchData.js"
import InfoGeneral from "../InfoGeneral.js"

class Races extends InfoGeneral{

    constructor(array, valeur = null){
        super(array, valeur)
    }

    info = async () => {
        if(this.valeur === null){
            this.listName('Races', 'races')
        }
        
        if(this.valeur != null){
            document.getElementById('content').innerHTML += `<a href="index.html?info=races">
                                                            <button type="button" class="btn btn-outline-primary" style="margin: 10px">Retour</button>
                                                            </a>`
            let info = []
            const newData = new FetchData()
            const valeur = this.valeur.toLowerCase()
            info = await newData.fetchDatav3('https://www.dnd5eapi.co/api/races/'+valeur)
            console.log(info)
            document.getElementById('content').innerHTML += `<h2>${info['name']}</h2>
                                                            <h3> Leur Language</h3>`
            for(let i = 0; i < info['languages'].length; i++){
                document.getElementById('content').innerHTML += `<p>${info['languages'][i]['name']}</p>`
            }
            if(info['subraces'].length > 0){
                document.getElementById('content').innerHTML += `<p>Ca sous-race est: ${info['subraces'][0]['name']}</p>`
            }else{
                document.getElementById('content').innerHTML += `<p>Elle n'a pas de sous-races</p>`
            }
            document.getElementById('content').innerHTML += `<p>Cette races a pour taille principal ${info['size']}</p>` 
            if(info['traits'].length >0){
                document.getElementById('content').innerHTML += `<h3>Il ont pour trait</h3>`
                for(let i = 0; i < info['traits'].length; i++){
                    document.getElementById('content').innerHTML += `<p>${info['traits'][i]['name']}</p>`
                }
            }
            if(info['ability_bonuses'].length > 0){
                document.getElementById('content').innerHTML += `<h3>Il comme Caractéristique bonus</h3>`
                for(let i = 0; i < info['ability_bonuses'].length; i++){
                    document.getElementById('content').innerHTML += `<p>Pour la caractéristique ${info['ability_bonuses'][i]['ability_score']['name']} elle a le droit à +${info['ability_bonuses'][i]['bonus']}</p>`
                }
            }
        }
    }

}

export default Races