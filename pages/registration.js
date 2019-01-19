import React, { Component } from 'react';
import { Container, Button, Form, Label, Input} from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import web3 from '../ethereum/web3';

class Registration extends Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await store.methods.authorizeUniversity(accounts[0], this.state.value).send({
            from: accounts[0]
        });
    }

    render() {
        return (
            <Container >
                <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <Label>Enter Name</Label>
                        <Input 
                            value={this.state.value}
                            onChange={this.onChange}
                            placeholder={this.props.placeholder}
                         />
                    </Form.Field>
                    <Button type='submit' primary>Submit</Button>
                </Form>
            </Container>
        );
    }
};

export default Registration;