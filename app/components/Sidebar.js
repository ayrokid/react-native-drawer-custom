/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import {
  Container, 
  Header, 
  Title, 
  Content,
  Button, 
  Text,
  Left,
  Body,
  List,
  ListItem,
  Separator, 
  Thumbnail,
  View,
  Footer,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Sidebar extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Side Menu'
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            height: 200,
            paddingTop: 0,
            marginTop: 0,
            backgroundColor: 'skyblue',
          }}>
          <Thumbnail large bordered
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style={{ borderColor: 'red'}}
          />
          <Text
          style={{ marginTop: 20 }}
          >Yanun</Text>
          </View>
          <Separator bordered>
            <Text>Menu</Text>
          </Separator>
          <ListItem icon style={styles.paddingList}>
            <Left>
              <Icon name="home" size={30} />
            </Left>
            <Body>
              <Text>Home</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.paddingList} onPress={() => navigate('Profile') }>
            <Left>
              <Icon name="account-box" size={30} />
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.paddingList} >
            <Left>
              <Icon name="settings" size={30} />
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.paddingList} >
            <Left>
              <Icon name="power-settings-new" size={30} />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </Content>
        <Footer transparent>
          <Left style={{paddingLeft: 10}}>
              <Button transparent>
                  <Icon name='help' size={30} color="#fff" />
                  <Text style={{color: '#ffffff', paddingLeft: 5}}>Help</Text>
              </Button>
          </Left>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  paddingList: {
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 5
  },
});