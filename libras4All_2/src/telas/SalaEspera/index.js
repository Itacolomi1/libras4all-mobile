import React from 'react';
import {Text} from 'react-native';
import * as settings from '../../assets/config/appSettings.json'

export default function SalaEspera({route, navigation}) {
    const {userID,token, salaID} = route.params
    let Alunos = [];
    let AlunosTrue = [];
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Screen was focused
          // Do something
         getIdsUser();
        });
    
        return unsubscribe;
    }, [navigation]);

    function getIdsUser() {
     
        fetch(settings.backend.url + `/sala/listarAlunos/${salaID}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        
        })
        .then(response => response.json())
        .then(responseJson => {
           
            Alunos = responseJson;
            getAlunos();
            
        })
        .catch(error => {
          console.log('deu errado');
          console.error(error);
        });
    }

    async function getAlunos(){

        // console.log('Lista de Alunos antes');
        // console.log(AlunosTrue);

        // AlunosTrue = Alunos.map( async (elemento)=>{
        //     let primeiro_aluno = await getAluno(elemento);
        //     return primeiro_aluno;
        // });
        
        //testando
        // console.log('Lista de Alunos depois');
        // console.log(AlunosTrue);
        let primeiro_aluno = await getAluno(Alunos[0]);
        console.log('Olha o primeiro Alunooo');
        console.log(primeiro_aluno);

    }

    async function getAluno(elemento) {
        let retorno = '';
        await fetch(settings.backend.url + `/usuario/${elemento._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
    
        })
            .then((response) =>{

                if(response.ok){
                    console.log('retornando resposta');
                    console.log(response.json());
                    return response.json();
                }
            })
            // .then(responseJson => {
            //     console.log('peguei o aluno');      
            //     retorno = responseJson;
            //   console.log(retorno);
            //   console.log('retornando o aluno');
            //   return retorno;
            // })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });
        
    
    }
    


    


    return <>
        <Text>Tela Sala Espera</Text>
    </>
}