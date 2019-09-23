import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import Constants from "expo-constants";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
// https://github.com/JesperLekland/react-native-svg-charts-examples#piechart
//importar outros componentes aqui

export default class Graficos extends React.Component {
  constructor(props) {
    super(props);
    //definir as propriedades para o componente aqui
  }

  //Renderiza o componente aqui
  render() {
    const data = [19, 22, 24, 18, 18, 18, 18, 19, 18, 19, 20, 18, 18];
    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 30, bottom: 5 };
    const xAxisHeight = 30;
    const Gradient = () => (
      <Defs key={"gradient"}>
        <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
          <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
          <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
        </LinearGradient>
      </Defs>
    );
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
          <Text style={{ fontSize: 25 }}>Temperatura</Text>
          <View style={{ height: 240, padding: 20, flexDirection: "row" }}>
            <Text>↑°C</Text>
            <YAxis
              data={data}
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                  strokeWidth: 2,
                  stroke: "url(#gradient)"
                }}
              >
                <Grid />
                <Gradient />
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={data}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
              />
            </View>
            <Text>h</Text>
            <Text>→</Text>
          </View>
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
    marginTop: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    position: "absolute",
    height: Constants.statusBarHeight + 55,
    width: "100%",
    top: 0,
    backgroundColor: "rgb(82,163,247)"
  }
});
