import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import api from './services/api';

export default function app() {

  const [projects, setProjects]=useState([]);
  
  useEffect(()=>{
    api.get('projects').then(response =>{
      console.log("Resposta: ", response)
      console.log("resposta data: ", response.data)
      setProjects(response.data)
    });    
  },[]);

  return (
    <> 
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!!!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

//Não possuem valor semântico (significado)
//Não possuem estilização própria
//Todos componente possuem por padrão 'display: flex' (flexbox layout WEB pesquisar)
//Não existe herança de estilos, nao adianta querer colocar um estilo no container e querer que o que existe dentro receba esse estilo

//View: toma o lugar de todos os containers existente no HTML (div, header, footer, main, aside, section)
//Text: texto é texto, no react native não possui nenhuma espécie de discriminação (p, span, strong, h1, h2, h3)
