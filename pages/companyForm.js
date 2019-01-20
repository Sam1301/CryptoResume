import React, { Component } from 'react';
import { Container, Button, Input, Form, Label} from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class EmployeeForm extends Component {
    state =  {
        address: '',
        id: '',
        designation: '',
        dateOfJoining: '',
        dateOfRelieving: '',
        ctc: ''
    };

    onChangeAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    onChangeID = (e) => {
        this.setState({ id: e.target.value })

    }

    onChangeDesignation = (e) => {
        this.setState({ designation: e.target.value })
    }

    onChangeDateOfJoining = (e) => {
        this.setState({ dateOfJoining: e.target.value })

    }

    onChangeDateOfRelieving = (e) => {
        this.setState({ dateOfRelieving: e.target.value })

    }

    onChangeCtc = (e) => {
        this.setState({ ctc: e.target.value })
    }

    onSubmit = async event => {
        event.preventDefault();        
        const { address, id, designation, dateOfJoining, dateOfRelieving, ctc } = this.state;
        try {
            const accounts = await web3.eth.getAccounts();

            await store.methods
                .verifyAllCompany(address, dateOfJoining, designation, ctc, dateOfRelieving, id)
                .send({ from: accounts[0] });
            Router.pushRoute(`/`);
        } catch (err) {
            console.log(err);    
        }

    };

    render() {
         const imgUrl = 'https://media.giphy.com/media/KZgvXXzEVSwca2JAfi/giphy.gifg';
        return (
            
             <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
             <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <h1 style={{color: 'white', fontSize: '5em'}}>
                        Employee Portal
            </h1>
            <Form onSubmit={this.onSubmit} style ={{ marginTop: '10px'}}>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        placeholder='Employee Address'
                        labelPosition="right" />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                        value={this.state.id}
                        placeholder='Employee ID'
                        onChange={this.onChangeID}
                        />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    placeholder='Designation'
                    value={this.state.designation}
                    onChange={this.onChangeDesignation}
                    />
                </Form.Field>
                 <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    placeholder="Date of joining"
                    value={this.state.dateOfJoining}
                    onChange={this.onChangeDateOfJoining}
                    />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    placeholder='Date of Relieving'
                    value={this.state.dateOfRelieving}
                    onChange={this.onChangeDateOfRelieving}
                    />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                        placeholder='CTC'
                        value={this.state.ctc}
                        onChange={this.onChangeCtc}
                    />
                </Form.Field>
                <Button secondary size='massive' type='submit' style={{ marginLeft: '20vw'}}>Submit</Button>
            </Form>
            </div>
        );
    }
}

export default EmployeeForm;