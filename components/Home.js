import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
//importar outros componentes aqui

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    //definir as propriedades para o componente aqui
  }

  //Renderiza o componente aqui
  render() {
    return (
      <ImageBackground
        source={require("../img/background-image.jpg")}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Image style={styles.image} source={require("../img/sunshine.png")} />
          <Text style={styles.texto}>
            Sunshine, diferente dos projetos climáticos padrões, fornece
            informações adicionais sobre o microclima onde você vive. Aqui você
            não encontrará apenas dados de temperatura ou chuva, mas também dos
            gases e da atuação do sol sobre sua cidade.
          </Text>
          <Button
            title="Começar"
            onPress={this.props.navigation.openDrawer}
            style={styles.botao}
          />
        </View>
      </ImageBackground>
    );
  }
}

//escrever as propriedades dos estilos para os componentes aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inner: {
    width: "90%",
    height: "90%",
    backgroundColor: "rgba(255,255,255,.6)",
    borderColor: "black",
    borderWidth: 0.09,
    borderRadius: 15
  },
  image: {
    justifyContent: "center",
    padding: 10,
    width: "90%",
    height: 200,
    marginLeft: 20,
    marginTop: 20
  },
  texto: {
    marginTop: 20,
    padding: 15,
    fontSize: 20,
    textAlign: "justify",
    marginBottom: 35
  },
  botao: {
    marginTop: 200,
    color: "#14f3ff"
  }
});
