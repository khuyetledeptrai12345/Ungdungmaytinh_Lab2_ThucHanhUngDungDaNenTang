import { StyleSheet } from "react-native";
import { CacMaMau} from "../styles/Color"

export const Styles = StyleSheet.create ({
   btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: CacMaMau.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,

   },
   btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: CacMaMau.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
   },
   btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: CacMaMau.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
   },
   btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: CacMaMau.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
   },
   smallTextLight: {
    fontSize: 32,
    color: CacMaMau.white,
   },
   smallTextDark: {
    fontSize: 32,
    color: CacMaMau.black,

   },
   row: {
    maxWidth: '100%',
    flexDirection: 'row',
   },
   viewBottom: {
    position: 'absolute',
    bottom: 50,
   },
   
   screenfirstNumber: {
    fontSize: 96,
    color: CacMaMau.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
   },
   screenSecondNumber: {
    fontSize: 96,
    color: CacMaMau.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
   },
});
