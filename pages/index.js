import React, { Component } from 'react';
import { Button, Container, Message } from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class ResumeIndex extends Component {
    render() {
        const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        // TODO: route to student form
        // TODO: route to owner form
        return (
            <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>

                    <h1 style={{color: 'white'}}>
                        Blockchain resume
                    </h1>
                    <div >
                        <Link route='/applicantDashboard'> 
                            <Button>
                                Applicant
                            </Button>
                        </Link>
                        <Link route='/companyForm'>
                            <Button>Company</Button>
                        </Link>
                        <Link route='/universityForm'>
                            <Button>University</Button>
                        </Link>
                        <Link route='/'>
                            <Button>Owner</Button>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default ResumeIndex;