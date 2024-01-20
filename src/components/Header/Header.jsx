import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ tiempoActual ,setTiempoActual ,setTime }) {
    const handlePress = (index)=>{
    const newTime = index === 0 ? 25 : index === 1 ? 5 :15
    setTiempoActual(index);
    setTime(newTime*60)
    }
  return (
    <View style={styles.container}>
      {options.map((option, i) => (
        <TouchableOpacity key={i} onPress={()=>handlePress(i)} style={[styles.touchableOpacity,
        tiempoActual !== i && {borderColor:"transparent"}]}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
  
    flexDirection: "row",
   // opcional: añade espacio entre las opciones
  },
  touchableOpacity: {
        width:"33%",
        borderWidth : 3,
        padding:5,
        borderColor:"white",
        marginVertical:20,
        borderRadius : 5
  },
});
