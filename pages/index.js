import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Head from 'next/head';

class ResumeIndex extends Component {
    render() {
        const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        return (
            <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>

                    <h1 style={{color: 'white'}}>
                        Blockchain resume
                    </h1>
                    <div >
                        <Button>
                            Student
                        </Button>
                        <Button>
                            Company
                        </Button>
                        <Button>
                            University
                        </Button>
                    </div>
            </div>
        );
    }
}

export default ResumeIndex;