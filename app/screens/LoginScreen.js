/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native'
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label,
  Thumbnail,
  Text,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            height: 200,
            paddingTop: 0,
            marginTop: 0,
            marginBottom: 20,
          }}>
            <Thumbnail large bordered
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
            style={{ borderColor: 'red'}}
            />
            <Text
            style={{ marginTop: 20 }}
            >Pisang Apps</Text>
          </View>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input type="password" />
            </Item>
            <Button full info style={{ marginTop: 30 }} onPress={() => this.props.navigation.navigate('Home')} >
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});