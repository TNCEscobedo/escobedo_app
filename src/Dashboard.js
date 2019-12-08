import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from "./Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MarketCard from './MarketCard';
class Dashboard extends React.Component {
    static navigationOptions = {
        header: () => <Header left="exit-to-app" text="Mi app"/>,
        headerStyle: {
            height: 100
        }
    };
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={styles.topModule}>      
                <Text>Mis Rondinas</Text>
                <MaterialIcons
                    name="add-circle"
                    size={40}
                />
            </View>
            <ScrollView style={styles.scroll}>
                <MarketCard icon=""/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
                <MarketCard/>
            </ScrollView>
        </View>
        );
    }
}

const styles = {
    topModule: {
        width: "100%",
        height: "10%", 
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 30
    },
    scroll: {
        flex: 1,
        width: "100%",
        padding: 30,
        backgroundColor: "red"
    }
}

export default Dashboard;