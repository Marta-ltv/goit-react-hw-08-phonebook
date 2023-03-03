import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import { Form, FormInput, FormLabel } from "./LoginForm.styled"

export const LoginForm = () => {
    const dispatch = useDispatch();

const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(logIn({email,password}))
        console.log( email, password);
        form.reset();
    }     
    
    return (
        <Form onSubmit={handleSubmit}>
             <FormLabel>
                Email
                <FormInput type="text" name="email"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="text" name="password"/>
            </FormLabel>
            <button type="submit">Log In</button>
        </Form>
    )
}