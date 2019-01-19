import React, { Component } from 'react';
import { Container, Button, Input, Form, Label} from 'semantic-ui-react';
import Head from 'next/head';

class UniversityForm extends Component {

        // onSubmit = async event => {
        //     event.preventDefault();
        
        //     const { address, id, designation, dateOfJoining, dateOfRelieving, ctc } = this.state;
        //     // address _personAddr, string _dateOfJoining, string _designation, uint _ctc, string _dateOfRelieving, string _employeeID
        //     try {
        //         const accounts = await web3.eth.getAccounts();
        //         console.log("before");
    
        //         await store.methods
        //             .verifyAllUniversity(address, dateOfJoining, designation, ctc, dateOfRelieving, id)
        //             .send({ from: accounts[0], gas: '50000000' });
        //             console.log("after");
    
        //         Router.pushRoute(`/`);
        //     } catch (err) {
        //         console.log(err);
                
        //     }
    
        // };

    render() {
        return (
            <Container >
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <Form style ={{ marginTop: '10px' }}>
                <Form.Field>
                     <Label>Student Address</Label>
                    <Input 
                    placeholder='Student Address'
                    labelPosition="right" />
                </Form.Field>
                <Form.Field>
                    <Label>Year of Graduation</Label>
                    <Input placeholder='Year of Graduation' />
                </Form.Field>
                 <Form.Field>
                    <Label>Degree Type</Label>
                    <Input placeholder='Degree Type' />
                </Form.Field>
                <Form.Field>
                    <Label>Field of Study</Label>
                    <Input placeholder='Field of Study' />
                </Form.Field>
                <Form.Field>
                    <Label>CGPA</Label>
                    <Input placeholder='CGPA' />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
            </Container>
        );
    }
}

export default UniversityForm;

