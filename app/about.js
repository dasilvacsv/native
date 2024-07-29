import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text } from 'react-native'

function About() {
  return (
<ScrollView>
<Link href="/" className="text-blue-400 mt-24 text-xl">
        Ir al Inicio
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