import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Label, Input } from 'semantic-ui-react'
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class UniversityForm extends Component {

        state =  {
            address: '',
            degreeType: '',
            completed: '',
            yearOfGraduation: '',
            fieldOfStudy: '',
            gpa: ''
        };
    
        onChangeAddress = (e) => {
            this.setState({ address: e.target.value })
        }
    
        onChangedegreeType = (e) => {
            this.setState({ degreeType: e.target.value })
    
        }
    
        onChangeCompleted = (e) => {
            this.setState({ completed: e.target.value })
        }
    
        onChangeYearOfGraduation = (e) => {
            this.setState({ yearOfGraduation: e.target.value })
        }
    
        onChangeFieldOfStudy = (e) => {
            this.setState({ fieldOfStudy: e.target.value })
    
        }
    
        onChangeGpa = (e) => {
            this.setState({ gpa: e.target.value })
        }
    
        onSubmit = async event => {
            event.preventDefault();        
            const { address, degreeType, completed, yearOfGraduation, fieldOfStudy, gpa } = this.state;

            try {
                const accounts = await web3.eth.getAccounts();
    
                await store.methods
                    .verifyAllUniversity(address, degreeType, completed, yearOfGraduation, fieldOfStudy, gpa)
                    .send({ from: accounts[0] });
                Router.pushRoute(`/`);
            } catch (err) {
                console.log(err);    
            }
        };
    
    render() {
        const imgUrl = 'https://image.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg';
        return (
             <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <h1 style={{color: 'white', fontSize: '5em'}}>
                        University Portal
            </h1>
            <Form onSubmit={this.onSubmit} style ={{ marginTop: '10px' }}>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    onChange={this.onChangeAddress}
                    value={this.state.address}
                    placeholder='Student Address'
                    labelPosition="right" />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    
                    <Input 
                    onChange={this.onChangeYearOfGraduation}
                    value={this.state.yearOfGraduation}
                    placeholder='Year of Graduation' />
                </Form.Field>
                 <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    onChange={this.onChangedegreeType}
                    value={this.state.degreeType}
                    placeholder='Degree Type' />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    onChange={this.onChangeFieldOfStudy}
                    value={this.state.fieldOfStudy}
                    placeholder='Field of Study' />
                </Form.Field>
                <Form.Field style={{display: 'flex', flexDirection: 'row', width: "50vw"}}>
                    <Input 
                    onChange={this.onChangeGpa}
                    value={this.state.gpa}
                    placeholder='GPA' />
                </Form.Field>
                
                <Button secondary size='massive' type='submit' style={{ marginLeft: '20vw'}}>Submit</Button>
            </Form>
            </div>
        );
    }
}

export default UniversityForm;

