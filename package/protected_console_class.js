class ProtectedConsoleClass {
    constructor() {
        this.forProd = (process.env.NODE_ENV == 'production')
    }

    logData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if(!forProd && !stillDisplayData){
            console.log(data); 
        }
    }
    
    warningData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if(!forProd && !stillDisplayData){
            console.warn(data);
        }
    }
    
    infoData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if(!forProd && !stillDisplayData){
            console.info(data); 
        }
    }
    
    debugData(data, stillDisplayData = false) {
        const forProd = this.forProd;
        if(!forProd && !stillDisplayData){
            console.debug(data); 
        }
    }
}

export default {ProtectedConsoleClass}
