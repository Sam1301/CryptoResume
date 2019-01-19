import React, { Component } from 'react';
import { Button, Container, Card, Icon, Image } from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';

class ApplicantDashboard extends Component {
    
    render() {
        // console.log(store);
            const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        return (
            <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}x>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>
                    <Card>
                        <Image src='https://cdn1.iconfinder.com/data/icons/avatar-flat-1/512/10-512.png' />
                        <Card.Content>
                          <Card.Header>Name</Card.Header>
                          <Card.Meta>
                            <span className='date'>Email Id</span>
                          </Card.Meta>
                          <Card.Description></Card.Description>
                          <Card.Header>University Name<Icon name ="check circle outline" /></Card.Header>
                          <Card.Description>Degree Type</Card.Description>
                          <Card.Description>Completed</Card.Description>
                          <Card.Description>Year Of Graduation</Card.Description>
                          <Card.Description>Field of Study</Card.Description>
                          <Card.Description>GPA</Card.Description>
                          <Card.Description> </Card.Description>
                          <Card.Header>Employer Name<Icon name ="check circle outline" /></Card.Header>
                          <Card.Description>Date of Joining - Date of Relieving</Card.Description>
                          <Card.Description>Description</Card.Description>
                          </Card.Content>
                      </Card>
            </div>
        );
    }
}

export default ApplicantDashboard;