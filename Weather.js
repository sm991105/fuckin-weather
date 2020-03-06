import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient:["#4DA0B0", "D39D38"],
        title: "Haze",
        subtitle: "I like Hazy weather."
    },
    Thunderstorm: {
        iconName:"weather-lightning-rainy",
        gradient:["#00C6FB","#005BEA"],
        title: "Thunderstorm",
        subtitle: "Just don't go outside."
    },
    Drizzle : {
        iconName:"weather-hail",
        gradient:["#89F7FE", "#66A6FF" ],
        title: "Drizzle",
        subtitle: "I like this kind of drizzling"

    },
    Rain: {
        iconName:"weather-rainy",
        gradient:["#00C6FB","#005BEA" ],
        title: "Rain",
        subtitle: "Keep your raincoat on."

    },
    Snow : {
        iconName:"weather-snowy",
        gradient:["#7DE2FC", "B9B6E5" ],
        title: "Snow",
        subtitle: "I don't like it when it's snowing."

    },
    Atmosphere: {
        iconName:"weather-hail",
        gradient:["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "I don't know what this means."

    },
    Clear: {
        iconName:"weather-sunny",
        gradient:["#FEF253", "#FF7300"],
        title: "Clear",
        subtitle: "Still, coronavirus!"

    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I like it when it's cloudy."

    },
    Dust: {
        iconName: "weather-hail",
        gradient:["#4DA0B0", "D39D38"],
        title: "Dust",
        subtitle: "Put on your mask when you get out."

    },

    Mist: {
        iconName: "weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "A little bit of mist if perfectly fine."

    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Dust",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight:"300",
        marginBottom: 10,
        alignItems: "flex-start"
    },
    subtitle:{
        color: "white",
        fontWeight:"600",
        fontSize: 24
    }
});