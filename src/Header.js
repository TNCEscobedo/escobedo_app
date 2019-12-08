import React from "react";
import { View, Text, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Header extends React.Component {
    
    render() {
        let right = <Text style={[styles.right]}>Dom</Text>;
        if(this.props.right){
            right =  (
                    <MaterialIcons
                        name={this.props.right}
                        size={30}
                        color={"white"}
                    />
            )
        }
        if(this.props.rightEmpty)
        right =  (
            <MaterialIcons
                name={this.props.right}
                size={30}
                color={"rgba(52, 52, 52, 0)"}
            />
        )
        return (
            <View style={styles.root}>
                <MaterialIcons
                    name={this.props.left}
                    size={30}
                    color={"white"}
                    onPress={this.props.onLeftPressed}
                />
                <Image source={require('../assets/escudo.png')} style={{width: 60, height: 60}}/>
                {right}
            </View>
        );
    }
}

const styles = {
    root: {
        height: 80,
        backgroundColor: "#3b5a99",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    center: {
        textAlign: "center",
        fontFamily: "OpenSans-Regular",
        color: "white"
    },
    left: {
        fontFamily: "OpenSans-Bold",
        color: "white"
    },
    right: {
        fontFamily: "OpenSans-Bold",
        color: "white", 
        fontSize: 16
    }
}

export default Header;