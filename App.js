import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
{/*      <CarItem
        title="Model S"
        subTitle="Starting from £29,990"
        backgroundImage={require("./assets/images/ModelS.jpeg")}
      />*/}

      <CarItem
          title="Model S"
          subTitle="Order Online For"
          subTitleCTA="Touchless Delivery"
          backgroundImage={require("./assets/images/ModelS.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
