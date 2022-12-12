import Html from "./Html.js"

class Bootstrap extends Html {

    divRow(content, id = null, style = null){
        return this.surround('div', content, 'row', id, style)
    }

}

export default Bootstrap