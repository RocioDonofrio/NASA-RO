import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { primaryColor } from "../Constans/color";
export default Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="white" />
      <View style={Styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" && 30,
    flex: 1,
    backgroundColor: primaryColor,
  },
});
