import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232a47',
    
  },
  container2: {
    flex: 1,
    backgroundColor: '#0000003b',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,

  }, 

  text: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  titleBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex', 
    flexDirection: 'row', 
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 

  mainConsole: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100vw',
  },

  consoleContainer: {
    width: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff1c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }, 

  mainConsoleBtn: {
    width: 100,
    height: 100,
    backgroundColor: '#1f2438',
    borderRadius: 50,
    borderColor: '#e9d417',
    borderWidth: 0,
    display: 'flex',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
});
