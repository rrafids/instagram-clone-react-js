import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyDRWTmYCLeeMJL7Ngfq0LQY0ZlJHFJkmrE',
  authDomain: 'instagram-clone-4b484.firebaseapp.com',
  projectId: 'instagram-clone-4b484',
  storageBucket: 'instagram-clone-4b484.appspot.com',
  messagingSenderId: '224405512304',
  appId: '1:224405512304:web:0cf672a71cb9724aca94b5'
}
const firebase = Firebase.initializeApp(config)
const { fieldValue } = Firebase.firestore

// seedDatabase(firebase)

export { firebase, fieldValue }
