//Importa todos os componentes que farão parte da navegação
import Medidores from "./Medidores";
import Graficos from "./Graficos";
import Home from "./Home";
import Map from "./Map";

//Componentes necessários para construir a navegação
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const gaveta = createDrawerNavigator(
  //Itens da gaveta (itens de menu)
  {
    Home: Home,
    Medidores: Medidores,
    Gráficos: Graficos,
    Mapa: Map
  },
  //Opções para o Drawer
  {
    initialRouteName: "Home",
    useNativeAnimations: true,
    drawerBackgroundColor: "rgba(82,163,247,0.7)",
    overlayColor: "#79B8F9",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#2B8DF2"
    }
  }
);

const Navegacao = createAppContainer(gaveta);
export default Navegacao;

//https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7
