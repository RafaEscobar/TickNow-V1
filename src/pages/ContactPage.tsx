import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import { OpenSocialComponent } from '../components/OpenSocialComponent';

const RInstagrama = "https://www.instagram.com/projects_ara?r=nametag";
const RGit = "https://github.com/RafaEscobar/TickNow.git";
const RFacebook = "https://www.facebook.com/profile.php?id=100087440973879";

export const ContactPage = () => {
  return (
    <View style={ styles.container }>
      <OpenSocialComponent url={RInstagrama} iname="logo-instagram" men="Intagram"></OpenSocialComponent>
   
      {/* <Text style={ styles.text }>Instagram</Text> */}
      <OpenSocialComponent url={RFacebook} iname="logo-facebook" men="Facebook"></OpenSocialComponent>
      {/* <Text style={ styles.text }>Facebook</Text> */}
      <OpenSocialComponent url={RGit} iname="logo-octocat" men="GitHub"></OpenSocialComponent>
      {/* <Text style={ styles.text }>GitHub</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row'
   }
});