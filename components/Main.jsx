import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

export default function Main() {
const [games, setGames] = useState([])
const insets = useSafeAreaInsets()

useEffect(() => {
getLatestGames().then((games) => {
  setGames(games)
})
}, [])

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <ScrollView>
      {games.map(game => (
        <GameCard key={game.slug} game={game}/>
      ))}
      </ScrollView>
      </View>
  );
}
