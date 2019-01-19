import React, { Component } from 'react';
import { Button, Container, Message } from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class ResumeIndex extends Component {
    render() {
        const imgUrl = "https://image.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg";
        return (
            <div style={{backgroundImage: "url(" + imgUrl  +")",backgroundSize: 'cover',overflow: 'hidden', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>

                    <h1 style={{color: 'white', fontSize: '7em'}}>
                        CryptoResume
                    </h1>
                    <div >
                        <Link route='/applicantDashboard'> 
                            <Button secondary size='massive'>
                                Applicant
                            </Button>
                        </Link>
                        <Link route='/companyForm'>
                            <Button secondary size='massive'>Company</Button>
                        </Link>
                        <Link route='/universityForm'>
                            <Button secondary size='massive'>University</Button>
                        </Link>
                        <Link route='/ownerPortal'>
                            <Button secondary size='massive'>Owner</Button>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default ResumeIndex;