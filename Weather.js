import React from "React";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
// 자바스크립트에는 타입이 없으므로, PropTypes을 이용하여 해당 변수에 타입을 지정할 수 잇다.
// 보통 유효성 검사를 위해서 사용
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Thinderstorm  : {
        iconName : "weather-lightning",
        gradient : ["#373b44", "#4286f4"]
    },
    Dizzle : {
        iconName : "weather-hail",
        gradient : ["#89f7fe", "#66a6ff"]
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ["#00c6fb", "#005bea"]
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#7de2fc", "#b9b6e5"]
    },
    Atmosphere : {
        iconName : "weather-hail",
        gradient : ["#89f7fe", "#66a6ff"]
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ["#fef253", "#ff7300"]
    },
    Clouds : {
        iconName : "weather-cloundy",
        gradient : ["#d7d2cc", "#304352"]
    },
    Haze : {
        iconName : "weather-hail",
        gradient : ["#89f7fe", "#66a6ff"]
    },
    Mist : {
        iconName : "weather-hail",
        gradient : ["#89f7fe", "#66a6ff"]
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons size={86} color="white" name={weatherOptions[condition].iconName}/>
                <Text style = {styles.temp}>{temp}º</Text>
            </View>
            <View style = {{...styles.halfContainer, ...styles.textContainer}}>
            {/*오브젝트 두개쓰는 방식*/}
                <Text style = {styles.title}>Title</Text>
                <Text style = {styles.subtitle}>SubTitle</Text>
            </View>
        </LinearGradient>
        )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thinderstorm", 
        "Dizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "center",
        alignContent : "center"
    },
    halfContainer : {
        flex : 1,
        justifyContent: "center",
        alignContent : "center"
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    },
    temp : {
        color : "white",
        fontSize : 36
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white" ,
        fontWeight : "600",
        fontSize : 24
    }
})