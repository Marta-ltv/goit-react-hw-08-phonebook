import { Form,FormInput,FormLabel } from "./RegisterForm.styled"

export const RegisterForm = () => {


    return (
        <Form>
            <FormLabel>
                Username
                <FormInput type="text"/>
            </FormLabel>
             <FormLabel>
                Email
                <FormInput type="text"/>
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="text"/>
            </FormLabel>
            <button type="submit">Register</button>
        </Form>
    )
}