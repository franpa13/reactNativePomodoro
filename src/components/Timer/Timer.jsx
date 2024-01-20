import React from 'react'
import { View , Text , StyleSheet} from 'react-native'

export default function Timer({time}) {
    const formateddTime = `${Math.floor(time/60).toString().padStart(2,"0")}:${(time%60).toString().padStart(2,0)}`
  return (
   <View style={styles.container}>
    <Text style={styles.time} >{formateddTime}</Text>
   </View>
  )
}
 const styles = StyleSheet.create({
    container : {
        flex:0.3,
        backgroundColor :"#F2F2F2",
        padding:15,
        borderRadius:18,
        justifyContent:"center"
  
    },
    time:{
     fontSize:80,
     fontWeight:"bold",
     textAlign:"center"
    }
 })