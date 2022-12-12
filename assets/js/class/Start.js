import Classes from "./Classes/Classes.js"
import FetchData from "./FetchData.js"
import Get from "./Get.js"
import Races from "./Races/Races.js"
import Spells from "./Spells/Spells.js"

class Start{

    startOk = async () => {   
        const get = new Get()
        const log = get.getInfo('info')
        const infoUrl = get.getInfo(log)

        if(log != null ){
            let info = []
            const data = new FetchData()
            let id = get.getInfo('id')
            let idSpell = get.getInfo('idSpell')
            info = await data.fetchDatav3('https://www.dnd5eapi.co/api/'+log)
            if(idSpell === null){
                idSpell = 0
            }
            if(id === null){
                id = 0
            }

            if(log === 'classes'){  
                const classes = new Classes(info.results, infoUrl, id, idSpell)
                classes.affichageClasses()
            }else if(log === 'races'){
                const races = new Races(info.results, infoUrl)
                races.info()
            }else if(log === 'spells'){
                const spells = new Spells(info.results, infoUrl, id)
                spells.listName()
            }
        }
    }

}

export default Start