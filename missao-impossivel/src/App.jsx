import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import Modal, { ModalBody, ModalHeader } from './components/Modal'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start

const requisicao = [
    {
        "id": 1,
        "titulo": "Missão Impossivel 2",
        "imagem": card1
    },
    {
        "id": 2,
        "titulo": "Missão Impossivel 3",
        "imagem": card2
    },
    {
        "id": 3,
        "titulo": "Missão Impossivel 4",
        "imagem": card3
    },
    {
        "id": 4,
        "titulo": "Missão Impossivel 5",
        "imagem": card4
    },
]


function App() {

    return (
        <>
            <Header />
            <img width="100%" src={banner} />
            <h1
                style={{
                    margin: 15
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexwrap: 'wrap'
                }}
            >

                {
                    requisicao.map((filme) => {
                        return (
                            <Card
                                key={filme.id}
                                imagem={filme.imagem}
                                titulo={filme.titulo}
                            />
                        )
                    })
                }

                {/**  Trabalho
                <Card imagem={card2}/>
                <Card imagem={card3}/>
                <Card imagem={card4}/>
                */}

            </div>

            <Modal>
                <ModalHeader>
                    <h2>Chaves</h2>
                </ModalHeader>
                <ModalBody>
                    <p
                        style={{
                            fontSize: '0.8rem',
                            marginBottom: 10
                        }}>
                        04/09/2023
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            marginBottom: 10
                        }}
                    >
                    <p
                        style={{
                            fontSize: '0.8rem',
                            marginBottom: '#b3b3b3'
                        }}
                    >
                        Direção:
                    </p>
                    <p
                        style={{
                            fontSize: '0.8rem',
                        }}
                    >
                        Seu Madruga
                    </p>

                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}

export default App;
