import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.white,
    height: "100%",
    width: "100%",
    marginTop: 0,
  },
  imageContainer: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.gray,
  },
  formContainer: {
    marginTop: 40,
    height: 310,
    width: "70%",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    height: 45,
    width: 270,
    backgroundColor: COLORS.orange,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.white,
  },
  inputContainer: {
    height: 60,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    height: 32,
  },
  buttonBack: {
    position: "absolute",
    right: 0,
    top: 0,
    marginRight: 12,
    marginTop: 42,
  },
});

