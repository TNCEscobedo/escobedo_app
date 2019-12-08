import React from 'react';
import { View, Text, ScrollView, AsyncStorage, ActivityIndicator,TouchableNativeFeedback } from 'react-native';
import Header from "./Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MarketCard from './MarketCard';
import { cloneNode } from '@babel/types';
class Dashboard extends React.Component {
    static navigationOptions = {
        header: () => <Header left="exit-to-app" text="Mi app"/>,
        headerStyle: {
            height: 100
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            keys: [],
            markets: undefined
        }
    }
    componentDidMount(){
        //AsyncStorage.clear();
        AsyncStorage.getAllKeys((err, keys) => {
            this.setState({keys});
            AsyncStorage.multiGet(keys, (err, markets) => {
                console.log(markets);
                const finalMarkets = []
                markets.forEach((market) => {
                    finalMarkets.push(JSON.parse(market[1]));
                });
                this.setState({markets: finalMarkets});
            });
        });

    }
    render() {
        if(!this.state.markets){
            return <ActivityIndicator size="large" animating={true}/>
        }
        console.log(this.state.markets);
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <View style={styles.topModule}>      
                <Text style={[styles.font, {fontSize: 30}]}>Mis Inspecciones</Text>
                <MaterialIcons
                    name="add-circle"
                    size={40}
                    color="#3b5a99"
                    onPress={() => this.props.navigation.navigate("Markets", {
                        keys: this.state.keys
                    })}
                />
            </View>
            <ScrollView keyboardShouldPersistTaps={"always"} style={styles.scroll}>
                <View style={{flex: 1,  width: "100%", padding: 30}}> 
                    {this.state.markets.map((obj) => {
                        return (
                            <TouchableNativeFeedback key={obj.market.idMercado}>
                                <MarketCard walk={() => this.props.navigation.navigate("Debts", {
                                    market: obj
                                })} market={obj.market}/>
                            </TouchableNativeFeedback>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = {
    topModule: {
        width: "100%",
        height: "10%", 
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 30
    },
    scroll: {
        flex: 1,
        width: "100%",
        backgroundColor: "white"
    },
    font: {
        fontFamily: "OpenSans-Regular"
    }
}

export default Dashboard;