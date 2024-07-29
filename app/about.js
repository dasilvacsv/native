import { Link } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, Text } from 'react-native'

function About() {
  return (
<ScrollView>
<Link asChild href="/" >
        <Pressable>
          <Text className="text-blue-400 text-xl mt-24">Volver al inicio</Text>
        </Pressable>
        </Link>
    <Text className="text-white font-bold mb-8 text-2xl">About</Text>
    <Text className="text-white/90 mb-4">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text className="text-white/90 mb-4">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text className="text-white/90 mb-4">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>
        <Text className="text-white/90 mb-4">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </Text>

</ScrollView>
)
}

export default About