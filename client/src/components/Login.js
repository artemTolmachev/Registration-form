import { useDispatch } from "react-redux";
import {setUser} from 'store/slices/userSlices';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {FormComp} from './FormComp';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const hendlLogin = (email, password) => {
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));
            push('/profile');
        })
        .catch(() => alert('Такого аккаунта не найдено'))
    }

    return(
        <div>
            <FormComp
            // title={button}
            hendlClick={hendlLogin}
            />
        </div>
    )
}

export {Login}