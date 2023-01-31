import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken("pk.eyJ1IjoiYW5hcy1raGQiLCJhIjoiY2xka2U0Y3VwMThzajNvbDE3eWoxaTV0dCJ9.y1bfVphsNjE3zjaoduIjQg");

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
        <Text> Boxk </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 500,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
