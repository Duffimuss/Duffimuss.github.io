import React, { useRef, useState } from 'react'
import './chat.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDoeVy0z-2uhdUlX15bMFX63yjJv6bXP9E",
  authDomain: "my-chat-app-4ff2f.firebaseapp.com",
  databaseURL: "https://my-chat-app-4ff2f-default-rtdb.firebaseio.com",
  projectId: "my-chat-app-4ff2f",
  storageBucket: "my-chat-app-4ff2f.appspot.com",
  messagingSenderId: "329571116726",
  appId: "1:329571116726:web:1b880503f9d9f6d8f82817",
  measurementId: "G-YNGGM6CCL7"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {

    const [user] = useAuthState(auth);

  return (
    <div classname="container chat-container" id="#chat">
        <header>
            <h1>General Chat (beta)</h1>
            <SignOut />
        </header>

        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>
    </div>
  );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithGoogle(provider);
    }

    return (
        <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button className="btn btn-primary" onClick={() => auth.signOut()}>Sign Out</button>

    )
}

function ChatRoom() {

    const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {

        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');

        dummy.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <div ref={dummy}></div>
            </main>

            <form className="chat__form-chat" onSubmit={sendMessage} >

                <input value={formValue} placeHolder="Enter Message" onChange={(e) => setFormValue(e.target.value)} />

                <button className="btn btn-primary" type="submit">Submit</button>

            </form>
        </>
    )


}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className="chatMessage__container">
            <div className={`message ${messageClass}`}>
                <img className="chat__profile-img" src={photoURL} />
                <p>{text}</p>
            </div>
        </div>
    )
}


export default Chat