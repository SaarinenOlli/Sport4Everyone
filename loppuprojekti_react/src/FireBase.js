import firebase from 'firebase';

    var config = {
        apiKey: "AIzaSyBAdOkpco3JZNnuRMvxfZJTnxzXlk28V5E",
        authDomain: "my-awesome-endproject.firebaseapp.com",
        databaseURL: "https://my-awesome-endproject.firebaseio.com",
        projectId: "my-awesome-endproject",
        storageBucket: "my-awesome-endproject.appspot.com",
        messagingSenderId: "573531597084"
};

    firebase.initializeApp(config);
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    export const auth = firebase.auth();
    export default firebase;