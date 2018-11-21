import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

//import { Base64 } from 'js-base64';

import Buffer1 from 'buffer';

var text = 'khoapham12345456711111111111111111';

export default class App extends Component {


    
    componentDidMount() {
        var bytes = Buffer1.Buffer(text); //Buffer1 la lay thu vien, con Buffer la ham Buffer. de chuyen file ve dang buffer
        console.log('----App-----');
        console.log(bytes); //log buffer hien thi ra
    
        console.log('----App1-----');
        console.log(bytes.toJSON()); //chuyen buffer ve JSON() de truyen di
        console.log('----App2-----');
        console.log(bytes.toString()); //dua buffer ve string ve dang chuoi cua no hoan goc
    }
    
   
    /*
    componentDidMount() {
        var pngBase64 ="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        var y = Base64.decode(pngBase64);

       console.log('------App-------');
        console.log(y);
        console.log('------App-------');
    }
    */
    


    
   test() {  //nhan nut test la nhay vao test
    var bytes = Buffer1.Buffer(text);
    console.log('----App-----');
    console.log(bytes);

    console.log('----App1-----');
    console.log(bytes.toJSON()); 
    console.log('----App2-----');
    console.log(bytes.toString());
   }
   

    render() {
        return (
            <View style={{ flex:1, backgroundColor: '#47612F' }}>
                <Text> Componet app</Text>
                <TouchableOpacity  onPress={() => this.test()}>
                    <Text>test</Text>
                </TouchableOpacity>
            </View>
        );
    }
}