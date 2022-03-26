import * as settings from '../assets/config/appSettings.json';

export async function adicionaHistorico(token,idSala,idUsuario,tipoJogo,idItem,acerto) {
    let retorno = '';
    let data = {
        "idSala": idSala,
        "idUsuario": idUsuario,
        "tipoJogo": tipoJogo,
        "idItem": idItem,
        "acerto": acerto
    }
 
        
    
    await fetch(settings.backend.url + `/historico`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)

    })
        .then(response => {
            console.log('retorno do histórico');            
            if(response.ok){                
                return response.json()
            }
        } )
        .then(responseJson => {
            if(responseJson){
                retorno = responseJson;
                console.log('salvei no historico');
                console.log(retorno);
            }else{
                console.log('algo estranho ao salvar o histórico')
            }

        })
        .catch(error => {
            console.log('deu errado');
            console.error(error);
        });

    return retorno;
}