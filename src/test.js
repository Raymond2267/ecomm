import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('E4tFT54IrGwrO0EZupIP').collection('cartItems').doc('H9ZlIKJmZRjUoxK8ZpDd')
firestore.doc('/users/E4tFT54IrGwrO0EZupIP/cartItem/H9ZlIKJmZRjUoxK8ZpDd')