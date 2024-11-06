import { View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './notificationStyle'; 

export default function NotificationScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/monitoring.png')} 
      style={styles.image}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          
        </View>
      </View>

      <TouchableOpacity 
  style={styles.backButton} 
  onPress={() => navigation.navigate('Home')}  
>
  <Icon name="arrow-back" size={30} color="black" />
</TouchableOpacity>

      
      <View style={styles.buttonborder}>
        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
            <Icon name="analytics" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
        <Icon name="notifications" size={30} color="black" />
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
        <Icon name="feedback" size={30} color="black" />
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
}
