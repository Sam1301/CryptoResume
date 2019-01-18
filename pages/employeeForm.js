import React, { Component } from 'react';
import { Container, Button, Checkbox, Form} from 'semantic-ui-react';
import Head from 'next/head';

class EmployeeForm extends Component {
    render() {
        return (
            <Container >
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <Form style ={{ marginTop: '10px' }}>
                <Form.Field>
                     <label>Employee Address</label>
                    <input 
                    placeholder='Employee Address'
                    labelPosition="right" />
                </Form.Field>
                <Form.Field>
                    <label>Employee ID</label>
                    <input placeholder='Employee ID' />
                </Form.Field>
                <Form.Field>
                    <label>Designation</label>
                    <input placeholder='Designation' />
                </Form.Field>
                 <Form.Field>
                    <label>Date of Joining</label>
                    <input placeholder='Date Of Joining' />
                </Form.Field>
                <Form.Field>
                    <label>Date of Relieving</label>
                    <input placeholder='Date of Relieving' />
                </Form.Field>
                <Form.Field>
                    <label>CTC</label>
                    <input placeholder='CTC' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </Container>
        );
    }
}

export default EmployeeForm;