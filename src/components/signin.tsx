import React from 'react';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import "firebase/auth";
import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
} from "@react-firebase/auth";
import { firebaseConfig } from "../../config";
import { Modal, Button } from 'semantic-ui-react'

const Signin = () => {
  const history = useHistory();

  const handleRedirect = (photoURL: string, user: string ) => {
    console.log(user)
    localStorage.setItem("photo", photoURL!);
    localStorage.setItem("user", user)
    history.push("/");
  }

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <Modal
        size={'tiny'}
        open={true}
        centered={false}
      >
        <Modal.Header style={{textAlign: "center"}} >SIGN IN WITH</Modal.Header>
        <Modal.Actions style={{textAlign: "center"}}>
          <Button color='google plus' content='Sign In with Google' icon='google' labelPosition='left' onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
              console.log(result)
              handleRedirect(result.user!.photoURL!, result.user!.displayName!)             
            }).catch((error) => {
              console.log(error.message)
              console.log(error.code)
            });
          }}>
          </Button>
          <Button color='black' content='Sign In with GitHub' icon='github' labelPosition='left' onClick={() => {
            const githubAuthProvider = new firebase.auth.GithubAuthProvider();
            firebase.auth().signInWithPopup(githubAuthProvider).then((result) => {
              console.log(result)
              handleRedirect(result.user!.photoURL!, result.additionalUserInfo!.username!)             
            }).catch((error) => {
              console.log(error.message)
              console.log(error.code)
            });
          }}>
          </Button>
        </Modal.Actions>
      </Modal>
      <div className="container" style={{backgroundColor: 'light grey'}}> </div>
    </FirebaseAuthProvider>
  );
}

export default Signin
