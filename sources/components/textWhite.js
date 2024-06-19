import { Text, View } from "react-native";

//pasar un etxto cualquiera y que lo muestre en blanco
export default TextWhite = ({ texto, size }) => {
  //Otra forma de exportar
  return (
    <View>
      <Text style={{ color: "white", fontSize: size || 20 }}> {texto} </Text>
      {/*componente que recibe un color y tamaño y lo muestra*/}
    </View>
  );
};
