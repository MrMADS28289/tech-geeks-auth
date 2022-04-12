import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const useFirebase = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
                setUser(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const signUpWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate('/')
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage)
            });
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    }, [])
    const handeLogout = () => {
        signOut(auth);
    }

    return {
        user,
        setUser,
        signInWithGoogle,
        signUpWithEmailPassword,
        login,
        handeLogout
    }
}

export default useFirebase;