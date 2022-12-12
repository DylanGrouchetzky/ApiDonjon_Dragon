class Get {

    getInfo(valeur){
        const urlChoix = window.location.href
        const url = new URL(urlChoix)
        const info = url.searchParams.get(valeur)

        return info
    }

    console(){
        return this.console.log('C\'est ok')
    }
    
}

export default Get