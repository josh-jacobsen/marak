import C from '../constants/authConstants'
import firebase from 'firebase'

import { auth } from '../dbInit'

export const AUTH_LOGIN = 'AUTH_LOGIN'

export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: C.AUTH_LOGIN,
					uid: user.uid,
					username: user.displayName
				});
			} else {
				if (getState().auth.status !== C.AUTH_ANONYMOUS) {
					dispatch({ type: C.AUTH_LOGOUT });
				}
			}
		});
	};
};

// if (error.code === 'auth/email-already-in-use') {
//   auth.signInWithEmailAndPassword(email, password).catch((error) => {
//     console.log(error.code, error.message)
//   })
// }

var GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = (email, password) => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN })
    console.log(email, password);
    auth.signInWithPopup(GoogleProvider)
      .then((result) => {
        const token = result.credential.accessToken
        const user = result.user
        console.log(user)
        dispatch({ type: C.AUTH_LOGIN, username: user.displayName, uid: user.uid })
      })
      .catch((error) => {
        console.log(error.code, error.message)
      })
	};
};
//
// C.AUTH_LOGIN:
//   return {
//     status: C.AUTH_LOGGED_IN,
//     username: action.username,
//     uid: action.uid
//   }

export const signInWithEmail = (email, password) => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN })
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.code, error.message)
    })
	};
};

export const signUp = (email, password) => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_OPEN })
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.code, error.message)
    })
	};
};

// (email, password) => {
// if (error) {
//   dispatch({ type: C.FEEDBACK_DISPLAY_ERROR, error: `Login failed! ${error}` });
//   dispatch({ type: C.AUTH_LOGOUT });
// }
// }
export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: C.AUTH_LOGOUT });
		auth
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error.code, error.message)
      })
	};
};
