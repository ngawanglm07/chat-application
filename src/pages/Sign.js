import React from 'react'
import { Container, Panel , Grid , Row , Col, Icon , Button, Alert} from 'rsuite'
import {auth, database} from '../misc/firebase';
import firebase from 'firebase/app';

function Sign() {
  

  const SignInWithProvider = async (provider) => {


    try{
      const {additionalUserInfo , user} = await auth.signInWithPopup(provider)
    
      if(additionalUserInfo.isNewUser){
        await database.ref(`/profiles/${user.uid}`).set({
          name:user.displayName,
          createdAt:firebase.database.ServerValue.TIMESTAMP
        })
      }
     
      Alert.success('signed in' , 4000)
    } catch(err){
      Alert.error(err.message , 4000)
    }

  }

   const onGoogleSignIn = () => {
      SignInWithProvider(new firebase.auth.GoogleAuthProvider() )
   };

   const onFacebookSignIn = () => {
    SignInWithProvider( new firebase.auth.FacebookAuthProvider())
   };



  return (
    <div>
      <Container>
        <Grid className='mt-page'>
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel>
                <div className='text-center'>
                  <h3>
                   Welcome to Fakebook
                  </h3>

                 <h5>we fake cause everyone real here</h5>
                  <small> Ngawang_lm production</small>

                  <div className='mt-3'>
                    <Button block color="blue" onClick={onFacebookSignIn}>
                    <Icon icon="facebook" />  Continue with facebook
                    </Button>
                    <Button block color="green" onClick={onGoogleSignIn}>
                    <Icon icon="google" /> continue with Google
                    </Button>
                  </div>
                </div>

              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Sign
