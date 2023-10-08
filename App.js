import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Text style={styles.v1_1}>LOGIN</Text>
      </View>
      <View style={styles.v2}>
        <View style={styles.v2_1}>
          <TextInput placeholder="Username" style={styles.input}></TextInput>
        </View>
        <View style={styles.v2_2}>
          <TextInput placeholder="Password" style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.v3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}> login </Text>
        </TouchableOpacity>
        <a href="">
        <Text style={styles.t3}>Forgot your password?</Text>
        </a>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  v1: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  v1_1: {
    marginTop: '150px',
    fontWeight: "bold",
    fontSize: "100px",
  },

  v2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  v2_1: {
    width: '360px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '3px',
    borderRadius: '10px',
    marginLeft: '5px',
    marginRight: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  v2_2: {
    marginTop: '5px',
    width: '360px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '3px',
    borderRadius: '10px',
    marginLeft: '5px',
    marginRight: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
      height: "100%",
      width: "90%",
      marginLeft: "5px",
      fontSize: "18px",
      lineHeight: "21.09px",
      fontFamily: "Roboto",
    },

  v3: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 60,
    margin: 12,
    paddingVertical: 20,
    width: '250px'
  },
  button_text: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "normal",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  t3: {
    fontSize: 15,
    alignItems: 'center',
    fontWeight: 'bold',
    fontStyle: "italic",
    textDecorationLine:"underline", 
  },
  
});
