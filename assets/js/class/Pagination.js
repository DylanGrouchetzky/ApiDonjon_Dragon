class Pagination{

    pagination(index, array){
        const id = index * 1
        let before = id - 1
        let after = id + 1
        document.getElementById('content').innerHTML += `<div class="row">
                                                            <div class="col-4" id="before">
                                                            </div>
                                                            <div class="col-4">
                                                                <a href="index.html?info=classes">
                                                                    <button type="button" class="btn btn-outline-primary" style="margin: 10px">Retour</button>
                                                                </a>
                                                            </div>
                                                            <div class="col-4" id="after"> 
                                                            </div>
                                                        </div>`
        if(before >= 0){
            const nameBefore = array[before]['name']
            document.getElementById('before').innerHTML += `<a href="index.html?info=classes&classes=${nameBefore}&id=${before}">
            <button type="button" class="btn btn-outline-primary" style="margin: 10px">Précédent</button>
            </a>`
        }
        if(after <= 11){
            const nameAfter = array[after]['name']
            document.getElementById('after').innerHTML += `<a href="index.html?info=classes&classes=${nameAfter}&id=${after}">
            <button type="button" class="btn btn-outline-primary" style="margin: 10px">Suivant</button>
            </a>`
        }
    }   

}

export default Pagination