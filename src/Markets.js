import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Header from "./Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MarketCard from './MarketCard';

class Markets extends React.Component{
    static navigationOptions = {
        header: () => <Header
                         text="Mi app"
                         left="arrow-back"
                    />,
        headerStyle: {
            height: 100
        }
    };
    render(){
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
                    <MarketCard icon="add-circle"/>
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
        width: "100%",
        padding: 30
    }
}

export default Markets;