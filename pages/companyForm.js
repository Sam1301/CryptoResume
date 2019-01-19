import React, { Component } from 'react';
import { Container, Button, Input, Form, Label} from 'semantic-ui-react';
import Head from 'next/head';

class EmployeeForm extends Component {
    // TODO: resolve  Warning: Extra attributes from the server: style
    render() {
        return (
            <Container >
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <Form style ={{ marginTop: '10px' }}>
                <Form.Field>
                     <Label>Employee Address</Label>
                    <Input 
                    placeholder='Employee Address'
                    labelPosition="right" />
                </Form.Field>
                <Form.Field>
                    <Label>Employee ID</Label>
                    <Input placeholder='Employee ID' />
                </Form.Field>
                <Form.Field>
                    <Label>Designation</Label>
                    <Input placeholder='Designation' />
                </Form.Field>
                 <Form.Field>
                    <Label>Date of Joining</Label>
                    <Input placeholder='Date Of Joining' />
                </Form.Field>
                <Form.Field>
                    <Label>Date of Relieving</Label>
                    <Input placeholder='Date of Relieving' />
                </Form.Field>
                <Form.Field>
                    <Label>CTC</Label>
                    <Input placeholder='CTC' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </Container>
        );
    }
}

export default EmployeeForm;