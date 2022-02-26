import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as settings from '../../assets/config/appSettings.json'


const Item = ({ title }) => (
    <View >
        <Text>{title}</Text>
    </View>
);


export default function SalaEspera({ route, navigation }) {
    const { userID, token, salaID } = route.params
    let Alunos = [];
    let AlunosTrue = [];
    const [listaAlunos, setListaAlunos] = useState(null);
    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getIdsUser();
        });

        return unsubscribe;
    }, [navigation]);

    function getIdsUser() {

        fetch(settings.backend.url + `/sala/listarAlunos/${salaID}`, {
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

    async function getAlunos() {

        for (let index = 0; index < Alunos.length; index++) {
            const element = Alunos[index];
            let primeiro_aluno = await getAluno(element);
            AlunosTrue.push(primeiro_aluno);       
        }
        setListaAlunos(AlunosTrue);
        console.log('Alunos True')  
        console.log(AlunosTrue);
        setLoading(false);
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
            .then(response => response.json())
            .then(responseJson => {

                retorno = responseJson;


            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });

        return retorno;

    }

    const renderItem = ({ item }) => (
        <Item title={item.nome} />
    );



    if(loading){
        return<>
            <Text>Carregando</Text>
        </>

    }else{
        return <>
        <View>
            <Text>Tela Sala Espera</Text>
        </View>
        <View>
            <FlatList
                data={listaAlunos}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />

        </View>
    </>

    }
   



}