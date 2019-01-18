import React, { Component } from 'react';
import { Container, Button, Checkbox, Form} from 'semantic-ui-react';
import Head from 'next/head';

class UniversityForm extends Component {
    render() {
        return (
            <Container >
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <Form style ={{ marginTop: '10px' }}>
                <Form.Field>
                     <label>Student Address</label>
                    <input 
                    placeholder='Student Address'
                    labelPosition="right" />
                </Form.Field>
                <Form.Field>
                    <label>Year of Graduation</label>
                    <input placeholder='Year of Graduation' />
                </Form.Field>
                 <Form.Field>
                    <label>Degree Type</label>
                    <input placeholder='Degree Type' />
                </Form.Field>
                <Form.Field>
                    <label>Field of Study</label>
                    <input placeholder='Field of Study' />
                </Form.Field>
                <Form.Field>
                    <label>CGPA</label>
                    <input placeholder='CGPA' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </Container>
        );
    }
}

export default UniversityForm;

