import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import MarketCardRow from './MarketCardRow';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
import BASE_URL from './BASE_URL';

class MarketCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
    }
    getMarket(market){
        axios.get(BASE_URL+"mercados/"+market.idMercado).then((res)=> {
            console.log(res.data);
            AsyncStorage.setItem(market.idMercado.toString(), JSON.stringify({puestos: res.data, market}), () => {
                this.setState({saved: true});
            });
        }).catch((e)=> {
            console.log(e);
        });
    }
    componentDidMount(){
        
    }
    render(){
        let iconRight = null;
        if(this.props.icon){
            iconRight = <MaterialIcons
                name={(this.props.saved || this.state.saved) ? "check-circle" : this.props.icon}
                containerStyle={{marginTop: 30}}
                size={40}
                color="#3b5a99"
                onPress={() => this.getMarket(this.props.market)}
            />
        }
        return(
            <View style={styles.root} onPress={this.props.onPress}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: -20, marginBottom: 15, paddingTop: 20}}>  
                        <Text style={[styles.font, {fontSize: 26}]}>
                            {this.props.market.colonia}
                        </Text> 
                        {iconRight}
                    </View>
                    <MarketCardRow 
                        one="Puestos Totales"
                        two={this.props.market.locales}
                    />
                    <MarketCardRow 
                        one="Asignados"
                        two="4"
                    />
                    <MarketCardRow 
                        one="Aproximado"
                        two="125"
                    />
                    <MarketCardRow 
                        one=""
                        two=""
                        four="Ir"
                        walk={this.props.walk}
                    />
            </View>
        );
    }
}

const styles = {
    root: {
        flex: 1,
        backgroundColor: "white",
        elevation: 6,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20
    },
    font: {
        fontFamily: "OpenSans-Regular"
    }
}

export default MarketCard;