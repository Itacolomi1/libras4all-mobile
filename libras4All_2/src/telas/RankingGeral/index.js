import React, {useState} from 'react';
import {Text, View,FlatList} from 'react-native';
import * as settings from '../../assets/config/appSettings.json';


const Item = ({ nome,libracoins }) => (
    <View >
        <Text>{nome}</Text>
        <Text>{libracoins}</Text>
    </View>
);

export default function RankingGeral({navigation}) {
    const [listaRanking, setListaRanking] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJmMTkzMmQ1M2EzMDAxNmEwYjU3ZSIsImlhdCI6MTY0NjA4MDc4NH0.2Vhsn6B1o6lJPlIS4MCdJrwwQo3hS67Rhuw9BOJBfns';

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getRanking();
        });

        return unsubscribe;
    }, [navigation]);

    function getRanking(){
        fetch(settings.backend.url + `/usuario/ranking/geral`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })
            .then(response => response.json())
            .then(responseJson => {
                console.log('Deu certo');
                console.log(responseJson);

                setListaRanking(responseJson);
                setLoading(false);

            })
            .catch(error => {
                console.log('deu errado');
                console.error(error);
            });

    }

    const renderItem = ({ item }) => (
        <Item nome={item.nome} libracoins={item.libracoins} />
    );

    if(loading){
        return <>
            <Text>Carregando</Text>
        </>

    }else{
        return <>
        <View>
            <Text>Tela Sala Espera</Text>
        </View>
        <View>
            <FlatList
                data={listaRanking}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />

        </View>
    </>

    }


}