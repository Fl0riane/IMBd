import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.img} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Interstellar </Text>
        <Text style={styles.h2}>2014 PG-13 2h49min Adventure,Drama,Sci-Fi</Text>
        <View style={styles.description}>
          <Image source={require("./assets/film.jpg")} style={styles.img2} />
          <View style={styles.text}>
            <Text style={styles.p}>
              A team of explorers travel through a wromhole in space in an
              attempt to ensure humannity's survival.
            </Text>
            <TouchableOpacity
              style={styles.add}
              activeOpacity={0.8} // réglage de la variation d'opacité
              onPress={() => {
                console.log("add to Watchlist");
              }}
            >
              <Text style={styles.h3}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.avis}>
          <View style={styles.src}>
            <FontAwesome name="star" size={24} color="yellow" />
            <Text style={styles.h3}>8.6/10</Text>
          </View>
          <View style={styles.src}>
            <AntDesign name="staro" size={24} color="white" />
            <Text style={styles.h3}>RATE THIS</Text>
          </View>
          <View style={styles.src}>
            <Text style={styles.metaScore}>74</Text>
            <Text style={styles.h3}>Metascore</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.avis}>
          <Text style={styles.title}>Top Billed Cast </Text>
          <Text style={[styles.h2, { color: "#0577BD" }]}>SEE ALL</Text>
        </View>

        <ScrollView
          horizontal
          style={styles.scrollview}
          contentContainerStyle={styles.content}
        >
          <View
            style={{
              height: "80%",
              backgroundColor: "#424242",
              width: "36%",
            }}
          >
            <Image
              style={styles.pic}
              source={require("./assets/matthew.jpg")}
            />
            <Text numberOfLines={1} style={styles.h4}>
              Matthew Mcconaughey
            </Text>
            <Text style={styles.h5}>Cooper</Text>
          </View>

          <View
            style={{
              height: "80%",
              backgroundColor: "#424242",
              width: "36%",
            }}
          >
            <Image style={styles.pic} source={require("./assets/anne.jpg")} />
            <Text style={styles.h4}>Anne Hathawy</Text>
            <Text style={styles.h5}>Brand</Text>
          </View>

          <View
            style={{
              height: "80%",
              backgroundColor: "#424242",
              width: "36%",
            }}
          >
            <Image
              style={styles.pic}
              source={require("./assets/jessica.jpg")}
            />
            <Text numberOfLines={1} style={styles.h4}>
              Jessica Chastain
            </Text>
            <Text style={styles.h5}>Murphy</Text>
          </View>
          <View
            style={{
              height: "80%",
              backgroundColor: "#424242",
              width: "36%",
            }}
          >
            <Image
              style={styles.pic}
              source={require("./assets/mackenzie.jpg")}
            />
            <Text numberOfLines={1} style={styles.h4}>
              Mackenzie Foy
            </Text>
            <Text style={styles.h5}>Murphy</Text>
          </View>
        </ScrollView>
        <View style={styles.avis}>
          <Text style={styles.h2}>Director</Text>
          <Text style={styles.h3}> Christopher Nolan</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  section: {
    backgroundColor: "#191919",
    paddingTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  img: {
    width: 100,
    height: 50,

    marginLeft: 20,
  },

  header: {
    marginTop: 20,
    backgroundColor: "#393939",
    height: 70,
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
  h3: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  h4: {
    padding: 5,
    color: "white",
    textAlign: "left",
    fontSize: 16,
  },
  h5: {
    paddingLeft: 5,
    marginBottom: 10,
    color: "white",
    textAlign: "left",
    fontSize: 12,
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
  text: {
    width: "100%",
    height: "100%",
  },
  img2: {
    marginTop: 20,
    width: "33%",
    height: 200,
  },

  add: {
    width: "66%",
    marginLeft: 10,
    backgroundColor: "#0577BD",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  avis: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  src: {
    marginTop: 20,
    flexDirection: "column",
    height: "100%",
    width: "33%",
    alignItems: "center",
    gap: 10,
  },

  metaScore: {
    backgroundColor: "green",
    color: "white",
    fontSize: 22,
  },

  scrollview: {
    width: "100%",
  },

  content: { gap: 6, width: "100%", height: 300 },
  pic: {
    width: "100%",
    height: "80%",
  },
});
