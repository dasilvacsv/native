import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { Score } from "./Score";


export function GameCard({game}) {
    return (
        <View className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10" key={game.slug}>
            <Image source={{uri: game.image}} style={styles.image}/>
            <View>
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
              <Score score={game.score} maxScore={100}/>
              <Text className="mt-2 flex-shrink-0" style={styles.description}>{game.description.slice(0,100)}...</Text>
              </View>

          </View>

    )
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true
    }).start()
  }, [opacity, index]);
  return (
    <Animated.View style={{opacity}}>
      <GameCard game={game}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 48
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 10
    },
    description: {
      fontSize: 16,
      color: '#fff'
    },
    score: {
      fontWeight: 'bold',
      fontSize: 16,
      color: "green",
      marginBottom: 10
    }
  });
  