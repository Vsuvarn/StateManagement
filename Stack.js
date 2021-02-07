import React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,VirtualizedList} from "react-native";
import { useDispatch, useSelector } from "react-redux";




export default function Stack() {

    const dispatch = useDispatch();
    const counter = useSelector(state =>({
        counter: state.counter,
        data: state.data
    }))    
  
    return (
        <>
         <View style={styles.stack}>

            <View >
                <Image 
                style={[styles.thumbnail,styles.bor]}
                source={{uri:counter.data[0].picture.large}}
                    
                />
            
            </View>
            <View style={styles.info}>
                <Text>{counter.data[0].name.title+" "+counter.data[0].name.first+" "+counter.data[0].name.last}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text>Age:{counter.data[0].dob.age+" "}</Text><Text>DOB:{counter.data[0].dob.date}</Text>
                </View>
                <Text>Gender:{counter.data[0].gender}</Text>
                <Text>Email:{counter.data[0].email}</Text>
                
            </View>
                        
                        
         </View>
    
        </>
    )
}

const styles = StyleSheet.create({
    stack: {
        height:100,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical:'center',
         marginTop:200
     },
     thumbnail:{
         height:200,
         width:200
     },
     bor:{
         borderStyle:'solid',
         borderWidth:1,
         borderColor:'#000000',
     },
     info:{
         marginLeft:5,
         marginTop:20,
         
     }
 
 })