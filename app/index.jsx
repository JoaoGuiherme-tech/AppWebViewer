import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://www.google.com' })}>
        <Image source={require("@/assets/images/googleIcon.png")} style={styles.googleIcon} />
        <Text style={styles.iconText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://www.wikipedia.org' })}>
        <Image source={require("@/assets/images/wikipediaIcon.png")} style={styles.wikipediaIcon} />
        <Text style={styles.iconText}>Wikipedia</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://www.youtube.com' })}>
        <Image source={require("@/assets/images/youtubeIcon.png")} style={styles.youtubeIcon} />
        <Text style={styles.iconText}>YouTube</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://www.facebook.com' })}>
        <Image source={require("@/assets/images/facebookIcon.png")} style={styles.facebookIcon} />
        <Text style={styles.iconText}>Facebook</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://store.steampowered.com/?l=portuguese' })}>
        <Image source={require("@/assets/images/steamIcon.png")} style={styles.steamIcon} />
        <Text style={styles.iconText}>Steam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('WebViewer', { url: 'https://renius.lojavirtualnuvem.com.br' })}>
        <Image source={require("@/assets/images/reniusIcon.png")} style={styles.reniusIcon} />
        <Text style={styles.iconText}>Renius</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const WebViewerScreen = ({ route }) => {
  const { url } = route.params;
  return <WebView source={{ uri: url }} style={styles.webview} />;
};

const App = () => (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ferramentas de Pesquisa', headerTitleAlign: "center" }} />
      <Stack.Screen name="WebViewer" component={WebViewerScreen} options={{ headerTitleAlign: "center", headerShown: false }} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 50,
    justifyContent: 'space-around',
  },
  iconButton: {
    alignItems: 'center',
    margin: 20,
  },
  googleIcon: {
    width: 88,
    height: 80,
  },
  wikipediaIcon: {
    width: 70,
    height: 65,
    marginTop: 16,
  },
  youtubeIcon: {
    borderStyle: "solid",
    borderColor: "black",
    marginTop: 10,
    width: 60,
    height: 50,
    resizeMode: "stretch",
  },
  facebookIcon: {
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
  steamIcon: {
    width: 50,
    height: 50,
  },
  reniusIcon: {
    width: 40,
    height: 50,
    resizeMode: "stretch",
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
  },
  webview: {
    flex: 1,
  },
});

export default App;
