import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';
import { Link } from '../routes';
import web3 from '../ethereum/web3';

class ResumeIndex extends Component {
    static async getInitialProps() {
        // TODO: this routing is working but on second entry of route
        // alternative: show a loading screen and then route to the current page

        // TODO: checkout button onclick approach
        const accounts = await web3.eth.getAccounts();
        const name = await store.methods.accreditedUniversities(accounts[0]).call();        
        const isUniversity = !!name;
        return { isUniversity };
    }

    render() {
        // console.log(store);

        const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        // TODO: route to student form
        return (
            <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>

                    <h1 style={{color: 'white'}}>
                        Blockchain resume
                    </h1>
                    <div >
                        <Link route='/'> 
                            <Button>
                                Student
                            </Button>
                        </Link>
                        <Link route='/employeeForm'>
                            <Button>Company</Button>
                        </Link>
                        <Link route={this.props.isUniversity ? '/universityForm' : '/universityRegistration'}>
                            <Button>
                                University
                            </Button>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default ResumeIndex;