class Html {
   
    surround(balise, content, classes = null, id = null, style = null){
        if(classes != null){
            classes = 'class="'+classes+'"'
        }
        if(id != null){
            id = 'id="'+id+'"'
        }
        if(style != null){
            style = 'style="'+style+'"'
        }
        return `<${balise} ${classes} ${id} ${style}>${content}</${balise}>`
    }

    title(choixTitre, content){
        return this.surround('h'+choixTitre, content)
    }
}

export default Html