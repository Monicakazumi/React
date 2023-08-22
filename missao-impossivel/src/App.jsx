import React from 'react'
import {Header} from './components/Header'
import banner from './imagens/banner.jpg'

//importação do arquivo css para todo projeto React
import styles from './styles.module.css'
import './styles/global.css'
//import './style.css' - atual, porém podendo dar conflito
//import styles from './styles.css' - versão antiga, não utilizada hoje

//npm install
//npm run start


function App() {
  return (
    <>
      {/**comentário ou ctrl + ; */}
      <Header />
      <img width="100%" src={banner} />
      <h1 className={styles.title}>Hello World!</h1>
      <h1
        style={{
          color: 'blue',
          backgroundColor: 'gray',
        }}
      >5 minutos para o intervalo</h1>
      <p>Primeira Aula de React</p>
    </>
  );
}

export default App;
