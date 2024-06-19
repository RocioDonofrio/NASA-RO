import { TouchableOpacity, View } from "react-native";
import TextWhite from "./Constans/textWhite";

const BotonDetalles = ({ onPres }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPres}>
        <TextWhite texto="Detalles" />
      </TouchableOpacity>
    </View>
  );
};
export default BotonDetalles;
