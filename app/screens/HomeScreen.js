/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'
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
  Card,
  CardItem
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ion from 'react-native-vector-icons/Ionicons'
export default class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => navigate('DrawerToggle')}>
              <Ion name='ios-menu' size={35} color="#000" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigate('TopUp')}>
              <Ion name='ios-add-circle' size={35} color="#000" />
              <Text  color="#fff">Top Up</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="smartphone" style={styles.icon} />
              <Text style={styles.paddingText}>Beli Pulsa</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="flash-on" style={styles.icon} />
              <Text style={styles.paddingText}>Token Listrik</Text>
            </CardItem>
          </Card>
          {/* <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="videogame-asset" style={styles.icon} />
              <Text style={styles.paddingText}>Voucher Game</Text>
            </CardItem>
          </Card> */}
          <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="network-wifi" style={styles.icon} />
              <Text style={styles.paddingText}>Paket Internet</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="phone" style={styles.icon} />
              <Text style={styles.paddingText}>Paket Telepon</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="compare-arrows" style={styles.icon} />
              <Text style={styles.paddingText}>Transfer</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={() => navigate('Profile') } >
              <Icon active name="thumb-up" style={styles.icon} />
              <Text style={styles.paddingText}>Donasi</Text>
            </CardItem>
          </Card>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Rp. 500.000</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  },
  paddingText: {
    paddingLeft: 15,
    fontSize: 20
  },
  header: {
    backgroundColor: '#ffffff',
  }
})
