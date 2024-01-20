import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import Header from './src/components/Header/Header';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import Timer from './src/components/Timer/Timer';
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]
export default function App() {
  const [isActive, setIsActive] = useState(false)
  const [isWorking, setIswork] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [tiempoActual, setTiempoActual] = useState("POMO" | "SHORT" | "BREAK")

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      
    } else {
    clearInterval(interval)
    }
    if (time === 0) {
      setIsActive(false)
      setIswork((prev)=> !prev)
      setTime(isWorking ? 300 :1500)
    }
    return()=> clearInterval(interval)
  }, [isActive,time])
  const handleStartStop = () => {
    playSound()
    setIsActive(!isActive)
  }
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/button-124476.mp3")
    )
    await sound.playAsync()

  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[tiempoActual] }]}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === "android" && 40 }}>
        <Text style={styles.text} >Pomodoro</Text>
        <Header
          tiempoActual={tiempoActual}
          setTiempoActual={setTiempoActual}
          setTime={setTime}
        />
        <Timer time={time} ></Timer>
        <TouchableOpacity onPress={handleStartStop} style={styles.boton}>
          <Text style={{ color: "white", fontWeight: "bold" }} >{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",

  },
  boton: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15

  }
});
