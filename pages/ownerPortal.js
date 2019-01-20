import React, { Component } from 'react';
import { Button, Container, Card, Icon, Image, Checkbox, Form, Label, Input} from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class OwnerPortal extends Component {
    state = {
        applicantName: '',
        applicantAddress: '',
        applicantEmail: '',
        universityName: '',
        universityAddress: '',
        universityEmail: '',
        companyName: '',
        companyAddress: '',
        companyEmail: ''
    }

    onSubmitApplicant = async () => {
        event.preventDefault();        
        const { applicantName, applicantAddress, applicantEmail } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
    
            await store.methods
                .identifyPerson(applicantAddress, applicantName, applicantEmail)
                .send({ from: accounts[0] });
            
            Router.pushRoute(`/`);
        } catch (err) {
            console.log(err);    
        }
    }

    onSubmitUniversity = async () => {
        const { universityName, universityAddress, universityEmail } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
    
            await store.methods
                .authorizeUniversity(universityAddress, universityName, universityEmail)
                .send({ from: accounts[0] });
            
            Router.pushRoute(`/`);
        } catch (err) {
            console.log(err);    
        }
    }
    
    onSubmitCompany = async () => {
        const { companyName, companyAddress, companyEmail } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
    
            await store.methods
                .authorizeFirm(companyAddress, companyName, companyEmail)
                .send({ from: accounts[0] });
            Router.pushRoute(`/`);
        } catch (err) {
            console.log(err);    
        }
    }

    onChangeAppName = (e) => {
        this.setState({ applicantName: e.target.value });
    }

    onChangeAppAddress = (e) => {
        this.setState({ applicantAddress: e.target.value });
    }

    onChangeAppEmail = (e) => {
        this.setState({ applicantEmail: e.target.value });
    }

    onChangeUniName = (e) => {
        this.setState({ universityName: e.target.value });
    }

    onChangeUniAddress = (e) => {
        this.setState({ universityAddress: e.target.value })
    }

    onChangeUniEmail = (e) => {
        this.setState({ universityEmail: e.target.value })
    }

    onChangeCompName = (e) => {
        this.setState({ companyName: e.target.value });
    }

    onChangeCompAddress = (e) => {
        this.setState({ companyAddress: e.target.value })
    }

    onChangeCompEmail = (e) => {
        this.setState({ companyEmail: e.target.value })
    }

    render() {
            const imgUrl = 'https://image.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg';
            const { applicantName, applicantAddress, applicantEmail, universityName, universityAddress, universityEmail, companyName, companyAddress, companyEmail} = this.state;

            return (
                <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>

                    <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                    </Head>
                    <h1 style={{color: 'white', fontSize: '5em'}}>
                        Owner Portal
            </h1>
                        <Card.Group itemsPerRow={3}>
                        <Card color='red'>
                        <Card.Content>
                            <Form onSubmit={this.onSubmitApplicant}>
                                <Form.Field>
                                    <label>Applicant Name</label>
                                    <input 
                                        value={applicantName}
                                        onChange={this.onChangeAppName}
                                        placeholder='Applicant Name' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Applicant Ethereum Address</label>
                                    <input 
                                        value={applicantAddress}
                                        onChange={this.onChangeAppAddress}
                                        placeholder='Applicant Ethereum Address' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Applicant Email ID</label>
                                    <input 
                                        value={applicantEmail}
                                        onChange={this.onChangeAppEmail}
                                        placeholder='Applicant Email ID' />
                                </Form.Field>
                                <Button secondary size='large' type='submit'>Submit</Button>
                        </Form> 
                        </Card.Content>
                        </Card>

                    <Card color='red'>
                        <Card.Content>
                            <Form onSubmit={this.onSubmitUniversity}>
                                <Form.Field>
                                    <label>University Name</label>
                                    <input 
                                        value={universityName}
                                        onChange={this.onChangeUniName}
                                        placeholder='University Name' />
                                </Form.Field>
                                <Form.Field>
                                    <label>University Ethereum Address</label>
                                    <input 
                                        value={universityAddress}
                                        onChange={this.onChangeUniAddress}
                                        placeholder='University Ethereum Address' />
                                </Form.Field>
                                <Form.Field>
                                    <label>University Email ID</label>
                                    <input 
                                    value={universityEmail}
                                    onChange={this.onChangeUniEmail}
                                    placeholder='University Email ID' />
                                </Form.Field>
                                <Button secondary size='large' type='submit'>Submit</Button>
                        </Form> 
                        </Card.Content>
                        </Card>

                        <Card color='red'>
                        <Card.Content>
                            <Form onSubmit={this.onSubmitCompany}>
                                <Form.Field>
                                    <label>Company Name</label>
                                    <input 
                                        value={companyName}
                                        onChange={this.onChangeCompName}
                                        placeholder='Company Name' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Company Ethereum Address</label>
                                    <input 
                                        value={companyAddress}
                                        onChange={this.onChangeCompAddress}
                                        placeholder='Company Ethereum Address' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Company Email ID</label>
                                    <input 
                                        value={companyEmail}
                                        onChange={this.onChangeCompEmail}
                                        placeholder='Company Email ID' />
                                </Form.Field>
                                <Button secondary size='large' type='submit'>Submit</Button>
                            </Form> 
                        </Card.Content>
                        </Card>

                        </Card.Group>
                </div>
            );
    }
}

export default OwnerPortal;