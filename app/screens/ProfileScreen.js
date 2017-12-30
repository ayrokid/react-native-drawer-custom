/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body,
  Text 
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home') }>
              <Icon name='arrow-back' size={35} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Profile
          </Text>
        </Content>
      </Container>
    );
  }
}
