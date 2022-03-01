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
        .then(response => response.json())
        .then(responseJson => {
            retorno = responseJson;
            console.log('salvei no historico');
            console.log(retorno);
        })
        .catch(error => {
            console.log('deu errado');
            console.error(error);
        });

    return retorno;
}