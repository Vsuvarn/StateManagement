import React from 'react'
import { Button,StyleSheet,Text,View} from "react-native";
import { useDispatch, useSelector } from "react-redux";


export default function Demo() {
    const dispatch = useDispatch();
    const getInfo = (gen) => {
        fetch('https://randomuser.me/api/?inc=id,gender,name,email,dob,picture')
        .then(res=>res.json())
        .then((userdata)=>{

            console.log("getdata  "+gen)
            console.log("resdata  "+userdata.results[0].gender)
                    if(userdata.results[0].gender == 'male' && gen == 'male'){
                        dispatch({type: 'INCREMENT',data:userdata.results});
                    }
                    else if(userdata.results[0].gender == 'female' && gen == 'female'){
                        dispatch({type: 'INCREMENT',data:userdata.results});
                    }
                    else{
                        getInfo(gen)
                    }
                   
        })
        .catch(e=>console.log("Error",e))
    }
    React.useEffect(()=>{
        fetch('https://randomuser.me/api/?inc=id,gender,name,email,dob,picture')
        .then(res=>res.json())
        .then((userdata)=>{
            console.log(userdata.results[0].gender)
            dispatch({type: 'INCREMENT',data:userdata.results});
            
        })
        .catch(e=>console.log("Error",e))
    })
    return (

       <View style={styles.container}>
            <View>
                {}
               <Button
                 
                title="Male"
                onPress={()=>getInfo("male")}
               />
                
               
            </View>
            <View style={styles.butt}>
                <Button

                title="Female"
                onPress={()=>getInfo("female")}
            />
            </View>
            
       </View> 
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex:0,
       marginBottom:10,
       marginTop:125,
        alignSelf:'center',
        
   
   
    },
    butt:{
        width:150,
       marginTop:10,
    }
})
