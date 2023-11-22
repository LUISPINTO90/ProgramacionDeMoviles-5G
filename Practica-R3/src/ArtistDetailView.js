import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ArtistDetailView = ({ artist }) => {
  const { name, listeners, mbid, streamable, image } = artist;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.label}>Listeners:</Text>
        <Text style={styles.detail}>{listeners}</Text>
        <Text style={styles.label}>MBID:</Text>
        <Text style={styles.detail}>{mbid}</Text>
        <Text style={styles.label}>Streamable:</Text>
        <Text style={styles.detail}>{streamable}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
  detail: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ArtistDetailView;
