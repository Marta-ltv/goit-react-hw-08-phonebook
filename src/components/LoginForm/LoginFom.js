import { Form,FormInput,FormLabel } from "./LoginForm.styled"

export const LoginForm = () => {


    return (
        <Form>
             <FormLabel>
                Email
                <FormInput type="text"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="text"/>
            </FormLabel>
            <button type="submit">Log In</button>
        </Form>
    )
}