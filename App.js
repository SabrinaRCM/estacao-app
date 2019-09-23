import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
//importar outros componentes aqui
import Navegacao from "./components/Navegacao";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //definir as propriedades para o componente aqui
  }

  //Renderiza o componente aqui
  render() {
    return <Navegacao />;
  }
}
