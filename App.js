import { StatusBar } from "expo-status-bar";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.metacritic.com/a/img/resize/3bc917343b798369b95f16269ad0953da023f5f4/catalog/provider/6/12/6-1-1008938-52.jpg?auto=webp&fit=cover&height=300&width=200",
        }}
        style={{ width: 215, height: 294 }}
      />
      <Text style={{ color: "white" }}>Tenemos aquí la configuración</Text>
      <StatusBar style="light" />
      <Button title="Pulsa aqui" onPress={() => alert("Hola")} />
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontWeight: pressed ? "bold" : "italic" }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
