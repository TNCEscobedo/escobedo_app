import React from 'react';
import { View, Text, TextInput, ScrollView, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import Header from "./Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MarketCard from './MarketCard';
import axios from 'axios';
import BASE_URL from "./BASE_URL";
class Markets extends React.Component{
    static navigationOptions = {
        header: () => <Header
                         text="Mi app"
                         onLeftPressed={() => console.log(this.props)}
                    />,
        headerStyle: {
            height: 100
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            markets: []
        }
    }
    componentDidMount(){
        console.log("didmount");
        axios.get(BASE_URL+"mercados/?fecha=2019-12-08").then((res) => {
            console.log(res.data);
            this.setState({markets: res.data});
        }).catch((e) => {
            console.log(e.errorMessage);
        })
    }
    render(){
        if(!this.state.markets){
            return <ActivityIndicator size="large" animating={true}/>
        }
        console.log("props", this.props.navigation.state.params.keys);
        return(
            <View style={{flex: 1}}>
                <View style={styles.searchField}>
                    <MaterialIcons name="search" size={20} color="#BABABA" />
                    <TextInput
                        style={styles.input}
                        placeholder={'Buscar por colonia...'}
                        onChangeText={(txt) => console.log(txt)}
                        secureTextEntry={this.props.secureTextEntry}
                    />
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={{flex: 1, padding: 30}}>
                        {this.state.markets.map((obj) => {
                            return (
                                <TouchableNativeFeedback>
                                    <MarketCard saved={this.props.navigation.state.params.keys.includes(obj.idMercado.toString())} key={obj.idMercado} market={obj} icon="add-circle"/>
                                </TouchableNativeFeedback>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    input: {
        width: '80%',
        fontSize: 12,
        fontFamily: "OpenSans-Regular",
        textAlign: 'left',
        height: 50,
        padding: 10,
        backgroundColor: '#F7F7F7',
        color: '#424242',
        borderWidth: 0
    },
    searchField: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#BABABA',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        paddingRight: 5,
        marginRight: 9
    },
    scroll: {
        flex: 1,
        width: "100%"
    }
}

export default Markets;