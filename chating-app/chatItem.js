import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { LazyloadView, LazyloadImage } from 'react-native-lazyload-deux';


type Props = {};
export default class ChatItem extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    onPressButton(i) {
        Alert.alert(`${i}`);
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.onPressButton(this.props.index)}>
                <LazyloadView host="unique-lazyload-list-name" style={styles.chatitem}>
                    <LazyloadImage
                        host="unique-lazyload-list-name" style={styles.imgitem}
                        source={require('./assets/ali.jpg')}
                    />
                    <Text style={styles.chattext}>Chat name {this.props.index + 1}</Text>
                </LazyloadView>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    imgitem: {
        width: 57,
        height: 57,
        marginRight: 7,
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 4
    },
    chattext: {
        color: '#000000',
        alignSelf: 'center',
    },
    chatitem: {
        flexBasis: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#f2f2f2',
        marginBottom: 3,
        flexDirection: 'row',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1

    }
});
