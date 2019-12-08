import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Header from "./Header";
import Button from './Button';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            correo: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange(key, value) {
        this.setState({ [key]: value });
    }

    loginUser() {
        this.props.signIn(this.state.correo, this.state.password);
    }

    static navigationOptions = {
        header: () => <Header
            text="Mi app"
            left="arrow-back"
            right="delete"
        />,
        headerStyle: {
            height: 100
        }
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", paddingTop: 50}}>
                <Text style={{ marginBottom: 20, fontSize: 24  }}>Iniciar Sesión</Text>
                <View style={{
                    width: "85%", backgroundColor: "white", height: 350, justifyContent: "center", alignItems: "center", shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 7,
                    borderRadius: 15
                }}>
                    <Text style={{ textAlign: "left", width: "75%", marginBottom: 5 }}>Correo electrónico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Buscar por colonia...'}
                        onChangeText={(txt) => this.handleChange("correo", txt)}
                        secureTextEntry={this.props.secureTextEntry}
                    />
                    <Text style={{ textAlign: "left", width: "75%", marginTop: 20, marginBottom: 5 }}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Buscar por colonia...'}
                        onChangeText={(txt) => this.handleChange("password", txt)}
                        secureTextEntry={this.props.secureTextEntry}
                    />
                    <View style={{ marginBottom: 30 }}></View>
                    <Button title="Iniciar Sesión" onPress={this.loginUser}></Button>
                </View>
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
        borderWidth: 0,
        borderRadius: 10
    }
}

export default Login;