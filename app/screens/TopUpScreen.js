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
  Text,
  Form, 
  Item, 
  Input, 
  Label,
  ListItem,
  Radio,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TopUpScreen extends Component {
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
            <Title>Top Up Saldo</Title>
          </Body>
          <Right />
        </Header>
        <Content >
          <ListItem>
            <Text>Daily Stand Up</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Text>Discussion with Client</Text>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
