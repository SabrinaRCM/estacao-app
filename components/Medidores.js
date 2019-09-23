import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ScrollView
} from "react-native";
import Constants from "expo-constants";
//importar outros componentes aqui

export default class Medidores extends React.Component {
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
        <View style={styles.top}>
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={this.props.navigation.openDrawer}
          >
            <Image
              source={require("../img/sidebar.png")}
              style={{
                width: 40,
                height: 40,
                top: Constants.statusBarHeight - 10
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inner}>
          <ScrollView>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Temperatura</Text>
              <Text style={styles.text_card}>20°C</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Umidade</Text>
              <Text style={styles.text_card}>78.8%</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Qualidade do ar</Text>
              <Text style={styles.text_card}>50%</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Luminosidade</Text>
              <Text style={styles.text_card}>245</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Luminosidade</Text>
              <Text style={styles.text_card}>245</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Luminosidade</Text>
              <Text style={styles.text_card}>245</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Luminosidade</Text>
              <Text style={styles.text_card}>245</Text>
            </View>
            <View style={styles.cards}>
              <Text style={styles.text_card}>Luminosidade</Text>
              <Text style={styles.text_card}>245</Text>
            </View>
          </ScrollView>
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
    height: "85%",
    backgroundColor: "rgba(255,255,255,.6)",
    borderColor: "black",
    borderWidth: 0.09,
    borderRadius: 15,
    marginTop: 75
    // alignItems: "center"
  },
  top: {
    position: "absolute",
    height: Constants.statusBarHeight + 55,
    width: "100%",
    top: 0,
    backgroundColor: "rgb(82,163,247)"
  },
  cards: {
    width: "90%",
    height: 100,
    backgroundColor: "rgba(0,0,0,.1)",
    borderColor: "rgba(0,0,0,.3)",
    borderWidth: 0.6,
    borderRadius: 15,
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: "2%"
  },
  text_card: {
    justifyContent: "space-between",
    fontSize: 20
  }
});
