import React, { Component } from 'react';
import { Button, Container, Card, Icon, Image } from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class ApplicantDashboard extends Component {
    
    static async getInitialProps(props) {
        let summary;
        try {
            const accounts = await web3.eth.getAccounts();            
            summary = await store.methods.getSummary(accounts[0]).call(); // object returned
        } catch(err) {
            console.log(err);
        }
        
        return {
            name: summary[0],
            email: summary[1],
            university: summary[2],
            yearOfGraduation: summary[3],
            fieldOfStudy: summary[4],
            gpa: summary[5],
            employerName: summary[6]
        };
    }

    render() {
            const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
            const { name, email, university, yearOfGraduation, fieldOfStudy, gpa, employerName } = this.props;

            return (
                <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}x>
                    <Head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                    </Head>
                        <Card>
                            <Image src='https://cdn1.iconfinder.com/data/icons/avatar-flat-1/512/10-512.png' />
                            <Card.Content>
                            <Card.Header>{name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{email}</span>
                            </Card.Meta>
                            <Card.Header>{university}<Icon name ="check circle outline" /></Card.Header>
                            <Card.Description>{yearOfGraduation}</Card.Description>
                            <Card.Description>{fieldOfStudy}</Card.Description>
                            <Card.Description>{gpa}</Card.Description>
                            <Card.Header>{employerName}<Icon name ="check circle outline" /></Card.Header>
                            </Card.Content>
                        </Card>
                </div>
            );
    }
}

export default ApplicantDashboard;