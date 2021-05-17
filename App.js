import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import colors from "./assets/color";
const { black, blue, yellow, green, grey } = colors;
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar style="light" backgroundColor="#000000" />
          <View style={styles.header}>
            <Image
              source={require("./assets/img/logo/logo-white.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.h1}>Interstellar</Text>
          <Text style={styles.textExplain}>
            2014 | PG-13 | 2h 49min | Adventure, Drama, Sci-Fi
          </Text>

          <View style={styles.cardPoster}>
            <Image
              source={require("./assets/img/pics/cover.png")}
              style={styles.poster}
              resizeMode="contain"
            />
            <View style={styles.butttonDescr}>
              <Text style={styles.description}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  console.log("click !!");
                }}
              >
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardIcons}>
            <View style={styles.uno}>
              <Ionicons name="ios-star-sharp" style={styles.starSharp} />
              <Text style={styles.rate}>8.6/10</Text>
              <Text style={styles.ratePeople}>1.1M</Text>
            </View>
            <View style={styles.due}>
              <Ionicons name="ios-star-outline" style={styles.starOutline} />
              <Text style={styles.rate}>RATE THIS</Text>
              <Text style={styles.rate}></Text>
            </View>
            <View style={styles.tre}>
              <Text style={styles.score}>74</Text>
              <Text style={styles.rate}>Metascore</Text>
              <Text style={styles.ratePeople}>46 critic reviews</Text>
            </View>
          </View>

          <View style={styles.cast}>
            <View style={styles.h2Link}>
              <Text style={styles.h2}>Top Billed Cast</Text>
              <Text style={styles.link}>SEE ALL</Text>
            </View>

            <View style={styles.actorCardScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.actorsCard}>
                  <Image
                    source={require("./assets/img/pics/MatthewMcConaughey.png")}
                    style={styles.actorPic}
                    resizeMode="contain"
                  ></Image>
                  <View style={styles.actorsDescr}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Matthew McConaughey
                    </Text>
                    <Text style={styles.role}>Cooper</Text>
                  </View>
                </View>
                <View style={styles.actorsCard}>
                  <Image
                    source={require("./assets/img/pics/AnneHathaway.png")}
                    style={styles.actorPic}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorsDescr}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Anne Hathaway
                    </Text>
                    <Text style={styles.role}>Brand</Text>
                  </View>
                </View>
                <View style={styles.actorsCard}>
                  <Image
                    source={require("./assets/img/pics/EllenBurstyn.png")}
                    style={styles.actorPic}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorsDescr}>
                    <Text style={styles.actor} numberOfLines={1}>
                      Ellen Burstyn
                    </Text>
                    <Text style={styles.role}>Murph</Text>
                  </View>
                </View>
                <View style={styles.actorsCard}>
                  <Image
                    source={require("./assets/img/pics/JohnLithgow.png")}
                    style={styles.actorPic}
                    resizeMode="cover"
                  ></Image>
                  <View style={styles.actorsDescr}>
                    <Text style={styles.actor} numberOfLines={1}>
                      John Lithgow
                    </Text>
                    <Text style={styles.role}>Pasquale</Text>
                  </View>
                </View>
              </ScrollView>
            </View>

            <Text style={styles.job}>Director</Text>
            <Text style={styles.jobName}>Christopher Nolan</Text>
            <Text style={styles.job}>Writers</Text>
            <Text style={styles.jobName}>
              Jonathan Nolan and Christopher Nolan
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    // paddingVertical: 40,
  },
  scrollView: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  header: {
    backgroundColor: grey,
    height: 80,
    justifyContent: "center",
  },
  logo: {
    height: 80,
    width: 80,
    marginLeft: 10,
  },
  h1: {
    color: "white",
    fontSize: 40,
    marginVertical: 10,
    marginLeft: 10,
  },
  textExplain: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },

  cardPoster: {
    marginVertical: 10,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-between",
  },
  poster: {
    height: 180,
    width: 180,
    marginVertical: 10,
    marginLeft: -15,
  },
  butttonDescr: {
    alignContent: "stretch",
    flexDirection: "column",
    width: 210,
    marginTop: 10,
    marginLeft: -5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: blue,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    padding: 8,
  },
  description: {
    fontSize: 13,
    textAlign: "justify",
    marginRight: 10,
    color: "white",
  },

  cardIcons: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 20,
  },
  starSharp: {
    textAlign: "center",
    color: yellow,
    fontSize: 24,
  },
  rate: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  ratePeople: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
  starOutline: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  tre: {
    alignItems: "center",
  },
  score: {
    backgroundColor: green,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    padding: 3,
    width: 28,
  },

  // cast: {

  // },
  h2Link: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  h2: {
    color: "white",
    fontSize: 25,
    marginVertical: 20,
    marginLeft: 10,
  },
  link: {
    color: blue,
    fontSize: 12,
    marginVertical: 20,
    marginRight: 10,
  },

  actorCardScroll: {
    flexDirection: "row",
  },
  actorPic: {
    width: 150,
    height: 230,
  },
  actorsDescr: {
    padding: 8,
    width: "80%",
  },

  actor: {
    color: "white",
  },
  role: {
    color: "white",
    fontSize: 13,
  },

  job: {
    color: "white",
    fontSize: 17,
    marginTop: 12,
  },
  jobName: {
    color: "white",
    fontSize: 13,
  },
});
