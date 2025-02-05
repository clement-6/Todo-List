import { StyleSheet } from "react-native";
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    label:{
        fontWeight: '700',
        marginLeft: 5,
    },
    indicator:{
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: -1,
        bottom: '7%',
        height: '85%',
        borderRadius: 12,
        
    },
    containerStyle:{
        width: '91.5%',
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        fontWeight: '900',
        flexDirection: 'row',
        marginBottom: Constants.statusBarHeight,
       
    },
    page:{
        backgroundColor: '#E9F4FA', 
        flex: 1
    },
    tabItem:{
        flexDirection: 'row',
    }

})


export default styles;