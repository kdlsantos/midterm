import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bordercontent: {
    flexDirection: 'row', 
    backgroundColor: '#8BFFBA',
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 50,
  },
  settingsBorder: {
    backgroundColor: '#CDF5F8',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    maxHeight: 350, 
    marginTop: 30,
    borderWidth: 1,
  },
  container: {
    flex: 1,
  },
  buttonborder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
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
    padding: 5                     
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 5,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  settingsText: {
    fontSize: 16,
    color: '#333',
  },
});
