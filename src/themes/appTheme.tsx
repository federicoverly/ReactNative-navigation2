import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#a5a58d',
  secondary: '#ffe8d6',
  tertiary: '#cb997e',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuText: {
    fontSize: 25,
    color: colors.tertiary,
    marginLeft: 10,
  }
});
