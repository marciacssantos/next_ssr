import React from 'react'
import { Container, Row,  Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import styles from './style.module.css'
import Image from 'next/image' 

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return(
        <Container fluid={true} text="center" className={styles.pagina}>
            <Row className={styles.topo}>
               <h1 className="text-center"> Vincent Van Gogh</h1>
            </Row>

            <Row className={styles.conteudo}>
            <Card>
                <Image src="/vg.jpg" width="120" height="190" alt="autoretrato Van Gogh"/>
                <CardBody>
                <CardTitle tag="h5">Van Gogh</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artista pós-impressionista</CardSubtitle>
                <CardText>Vincent Willem van Gogh nasceu em Zundert, na Holanda, no dia 30 de março de 1853. Filho do pastor Theodorus van Gogh <br/>e de Ana Cornelius Carbentus, Van Gogh era o primeiro filho de seis irmãos. Desde pequeno teve uma vida difícil, marcada <br />pela pobreza, miséria e doenças.</CardText>
                </CardBody>
            </Card>

            </Row>
            
            <Row className={styles.rodape}>
                <center>Created by Márcia Cristina da Silva Santos</center>
            </Row>
            
        </Container>
    )
    
}

export default Home