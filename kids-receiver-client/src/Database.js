// Database
import * as firebase from 'firebase';
class Database{
  static init(){
    firebase.initializeApp({
      apiKey: "AIzaSyApifYt8CAvM497wsu-zmleUOqOaHZjUz8",
      authDomain: "civic-team-6.firebaseapp.com",
      databaseURL: "https://civic-team-6.firebaseio.com",
      projectId: "civic-team-6",
      storageBucket: "civic-team-6.appspot.com",
      messagingSenderId: "394729909222"
      });
  }
}

export default Database;
