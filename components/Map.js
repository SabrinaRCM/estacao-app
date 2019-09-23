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
import Constants from "expo-constants";
import MapView from "react-native-maps";
//importar outros componentes aqui
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    //definir as propriedades para o componente aqui
  }

  //Renderiza o componente aqui
  render() {
    return (
      <View style={styles.container}>
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
        <MapView
          style={styles.maps}
          region={{
            latitude: -23.180329,
            longitude: -45.85841,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: -23.180329,
              longitude: -45.85841
            }}
            title={"Cruzeiro do Sul"}
            description={"A constelação que guia todas as outras."}
            pinColor={"blue"}
            onCalloutPress={() => {
              this.props.navigation.navigate("Medidores");
            }}
          />
          <MapView.Marker
            coordinate={{
              latitude: -23.1835581,
              longitude: -45.8537151
            }}
            title={"Cinturão de Órion"}
            description={"A constelação que guia os que buscam conhecimento."}
            pinColor={"blue"}
            onCalloutPress={() => {
              this.props.navigation.navigate("Medidores");
            }}
          />
        </MapView>
      </View>
    );
  }
}

//escrever as propriedades dos estilos para os componentes aqui
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  maps: {
    position: "absolute",
    top: 75,
    left: 0,
    bottom: 0,
    right: 0
  },
  top: {
    position: "absolute",
    height: Constants.statusBarHeight + 55,
    width: "100%",
    top: 0,
    backgroundColor: "rgb(82,163,247)"
  }
});
