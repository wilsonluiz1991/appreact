import React from "react";
import {
    Text,
    ScrollView,
    View,
    Image
} from "react-native";

import CartNews from './cart';

import styles from './styles';

import newsImage from '../../imgs/newsImage.jpg';

import newsImage1 from '../../imgs/news/news1.jpg';
import newsImage2 from '../../imgs/news/news2.jpg';
import newsImage3 from '../../imgs/news/news3.jpg';
import newsImage4 from '../../imgs/news/news4.jpg';

function Noticias() {
    return (
        <ScrollView>
            <View style={styles.cartImage}>

                <Image style={styles.image} source={newsImage} />
                
            </View>

            <View style={{borderWidth: 0.5, opacity: 0.5, borderLeftWidth: 0,borderRightWidth: 0,borderTopWidth: 0, borderColor: "#20232a", padding: 40, alignItems: "center", justifyContent: "center"}}> 
                <Text style={{fontSize: 30}}> Fique por dentro! </Text>
            </View>

            <View style={styles.cardContainer}>
                <CartNews link='https://globoesporte.globo.com/rs/futebol/times/internacional/noticia/conheca-o-torcedor-que-doou-r-1-milhao-para-o-inter-escalar-rodinei-contra-o-flamengo.ghtml' title="Conheça o torcedor que doou R$ 1 milhão para o Inter escalar Rodinei contra o Flamengo" img={newsImage3}/>
                <CartNews link='https://globoesporte.globo.com/futebol/futebol-internacional/futebol-frances/noticia/paqueta-marca-lyon-vence-o-brest-e-assume-lideranca-provisoria-no-frances.ghtml' title="Paquetá marca, Lyon vence o Brest e assume liderança provisória no Francês" img={newsImage2}/>
                <CartNews link='https://globoesporte.globo.com/futebol/times/corinthians/noticia/escalacao-do-corinthians-gabriel-segue-em-tratamento-e-mancini-deve-mudar-time-contra-o-vasco.ghtml' title="Escalação do Corinthians: Gabriel segue em tratamento, e Mancini deve mudar time contra o Vasco" img={newsImage1}/>
                <CartNews link='https://globoesporte.globo.com/futebol/times/fluminense/noticia/escalacao-do-fluminense-fred-treina-normalmente-e-tendencia-e-que-volte-ao-time-contra-o-santos.ghtml' title="Escalação do Fluminense: Fred treina normalmente e tendência é que volte ao time contra o Santos" img={newsImage4}/>
            </View>
        </ScrollView>

    );
}

{/* style={{borderWidth: 2,borderColor: "#20232a"}} */}

export default Noticias;


