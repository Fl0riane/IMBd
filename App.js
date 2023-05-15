import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import logo from "./assets/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
      </View>

      <Text style={styles.title}>Interstellar </Text>
      <Text style={styles.h2}>2014 PG-13 2h49min Adventure,Drama,Sci-Fi</Text>
      <View style={styles.description}>
        <Image source={require("./assets/film.jpg")} style={styles.img2} />
        <View style={styles.text}>
          <Text style={styles.p}>
            A team of explorers travel through a wromhole in space in an attempt
            to ensure humannity's survival.
          </Text>
          <TouchableOpacity
            style={styles.add}
            activeOpacity={0.8} // réglage de la variation d'opacité
            onPress={() => {
              console.log("add to Watchlist");
            }}
          >
            <Text>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",

    justifyContent: "center",
    color: "white",
  },
  img: {
    width: 100,
    height: 50,
    marginLeft: 20,
  },

  header: {
    backgroundColor: "#393939",
    height: 80,
    width: "100%",
    justifyContent: "center",
  },

  title: {
    color: "white",
    marginTop: 10,
    fontSize: 30,
  },

  h2: {
    color: "white",
    marginTop: 10,
    fontSize: 18,
  },

  p: {
    padding: 10,
    color: "white",
    marginTop: 10,
    fontSize: 16,
    width: "66%",

    overflow: "visible",
  },
  description: {
    flexDirection: "row",
  },
  img2: {
    marginTop: 20,
    width: 150,
    height: 200,
  },

  add: {
    backgroundColor: "#0577BD",
    height: 30,
    justifyContent: "center",
  },
});
