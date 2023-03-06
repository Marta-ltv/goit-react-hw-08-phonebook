import { Form, FormInput, FormLabel } from "./RegisterForm.styled"
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import Button from '@mui/material/Button';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        })
        );
        form.reset();
    };     

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel>
                Username
                <FormInput type="text" name="name"/>
            </FormLabel>
             <FormLabel>
                Email
                <FormInput type="text" name="email"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="text" name="password"/>
            </FormLabel>
            <Button type="submit">Register</Button>
        </Form>
    )
}