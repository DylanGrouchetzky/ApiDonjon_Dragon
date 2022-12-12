import FetchData from "../FetchData.js"
import InforGeneral from "../InfoGeneral.js"
import Bootstrap from "../Html/Bootstrap.js"
import Pagination from "../Pagination.js"

class Classes extends InforGeneral{

    constructor(array, valeur = null, id = null, idSpell = 0){
        super(array, valeur, id, idSpell)
    }

    affichageClasses = async () => {
        const html = new Bootstrap()
        if(this.valeur === null){  
            this.listName('Classes', 'classes')
        }
        if(this.valeur != null){
            const pagination = new Pagination()
            pagination.pagination(this.id, this.array)

            let info = []
            const newData = new FetchData()
            const valeur = this.valeur.toLowerCase()
            info = await newData.fetchDatav3('https://www.dnd5eapi.co/api/classes/'+valeur)

            let affichage = ""
            affichage += html.title('2', info['name'])+ html.title('3', "L'équiment de Départ")

            affichage += this.informationBoucler(info['starting_equipment_options'], 'desc')

            affichage += html.surround('p', `Ca sous-classes est: ${info['subclasses'][0]['name']}`) + html.title('3', 'Cest compétences sont')

            affichage += this.informationBoucler(info['proficiencies'], 'name')
            
            let infoSpells = []
            let affichageSpells = ""
            let spellPrecedent= ""
            let spellSuivant= ""
            infoSpells = await newData.fetchDatav3('https://www.dnd5eapi.co/api/classes/'+valeur+'/spells')
            if(infoSpells.results.length > 0){
                affichage += html.title('2', 'Voici ces sort')+ html.divRow('', 'spells', 'margin-top:30px')

                let id = this.idSpell * 1 
                let limit = id + 21
                if(limit > infoSpells.results.length){
                    limit = infoSpells.results.length
                }
                for(id; id < limit; id++){
                    affichageSpells += `<div class="col-4">
                <a href="index.html?info=spells&spells=${infoSpells.results[id]['index']}">
                <button type="button" class="btn btn-outline-primary" style="margin: 10px">${infoSpells.results[id]['name']}</button>
                </a>
                </div>`
                }

                const test = this.idSpell * 1
                let before = test - 21
                let after = test + 21

                affichageSpells += `<div class="row">
                                                                    <div class="col-4" id="beforeSpell">
                                                                    </div>
                                                                    <div class="col-4">
                                                                        <a href="index.html?info=classes">
                                                                            <button type="button" class="btn btn-outline-primary" style="margin: 10px">Retour</button>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-4" id="afterSpell"> 
                                                                    </div>
                                                                </div>`
                if(before >= 0){
                    spellPrecedent += `<a href="index.html?info=classes&classes=${info['name']}&id=${this.id * 1}&idSpell=${before}">
                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">Précédent</button>
                    </a>`
                }
                if(after <= infoSpells.results.length){
                    spellSuivant += `<a href="index.html?info=classes&classes=${info['name']}&id=${this.id * 1}&idSpell=${after}">
                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">Suivant</button>
                    </a>`
                }
                
            }
            this.insertion('content', affichage)
            if(infoSpells.results.length > 0){
                this.insertion('spells', affichageSpells)
                this.insertion('beforeSpell', spellPrecedent)
                this.insertion('afterSpell', spellSuivant)
            }
            
            
        }
    }

}

export default Classes