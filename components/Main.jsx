import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Link } from "expo-router";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Link href="/about" className="text-blue-400 text-xl">
        Ir al about
        </Link>
        {games.length == 0 ? (
          <ActivityIndicator size={'large'}/>
        ) : (
        <FlatList
        data={games}
        keyExtractor={(game) => game.slug}
        renderItem={({item, index}) => 
        <AnimatedGameCard game={item} index={index}/> }
        />
        )}
    </View> 
  );
}
