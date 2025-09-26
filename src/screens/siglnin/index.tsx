
import {View, Image, Text} from 'react-native';
import illustrationpink from "../../assets/illustration.png"
import { stylesSignin } from './styles';
export function siglnin() {

  
  return (
    <View  style={stylesSignin.container}>
      <Image source={illustrationpink} style={stylesSignin.image} resizeMode="stretch"/>
      <View style={stylesSignin.contet}> 
        <Text style={stylesSignin.title}> 
  Organize Suas {`\n`}
  Jogatinas{'\n'}
  facilmente
          </Text>
          <Text style={stylesSignin.subtitle} >
crie grupos para jogar seus game {`\n`}
favoritos com seus amigos
        </Text>
      </View>
    </View>
  )
}

