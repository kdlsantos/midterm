import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  buttonborder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 15,
    marginHorizontal: 50,
    marginBottom: 50,
    borderRadius: 50,
    backgroundColor: '#A0C5E5',
    paddingHorizontal: 40,
  },
  iconContainer: {
    backgroundColor: '#6BA6D4',  
    borderRadius: 100,          
    padding: 10,             
  },
  
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
});