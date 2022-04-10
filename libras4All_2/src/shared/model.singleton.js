

export default class ModelSingleton {

    static myInstance = null;

    _modelo = "";


    static getInstance() {
        if (ModelSingleton.myInstance == null) {
            ModelSingleton.myInstance = new ModelSingleton();
        }

        return this.myInstance;
    }

    getModelo() {
        return this._modelo;
    }

    setModelo(modelo) {
        this._modelo = modelo;
    }

}

