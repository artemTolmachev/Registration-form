import { useDispatch } from "react-redux";
import {setUser} from 'store/slices/userSlices';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {FormComp} from './FormComp';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SingUp = () => {
   const dispatch = useDispatch();
   const {push} = useHistory();

    const handleRegister = (email, password) => {
        console.log(123)
        let auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                push('/profile'); //после регистрации перекидываем пользователя на нужную нам страницу
            })
            .catch(() => alert('Такой email уже зарегестрирован'))
    }

    return(
        <div>
            <FormComp
            title="registar"
            hendlClick={handleRegister}
            />
        </div>
    )
}

export {SingUp}