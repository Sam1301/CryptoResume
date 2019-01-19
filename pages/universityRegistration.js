import React, { Component } from 'react';
import { Container, Button, Checkbox, Form} from 'semantic-ui-react';
import Head from 'next/head';

class UniversityRegistration extends Component {
    render() {
        return (
            <Container >
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>
                <Form>
                    <Form.Field>
                        <label>Enter Name</label>
                        <input 
                        placeholder='University Name'
                         />
                    </Form.Field>
                    <Button type='submit' primary>Submit</Button>
                </Form>
            </Container>
        );
    }
};

export default UniversityRegistration;