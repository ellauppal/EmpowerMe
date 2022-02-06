import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDW-bQV4PfO7eqtTnRvDmELPJqM4eD4DuM",
  authDomain: "hackviolet-7eecd.firebaseapp.com",
  databaseURL: "https://hackviolet-7eecd.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
