import React, { Component } from 'react';
import { Button, Container, Card, Icon, Image, Checkbox, Form, Label, Input} from 'semantic-ui-react';
import Head from 'next/head';
import store from '../ethereum/CredentialStore';

class OwnerPortal extends Component {
    
    render() {
        // console.log(store);
            const imgUrl = 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
        return (
            <div style={{backgroundImage: 'url(' + imgUrl + ')', display: 'flex', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}x>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
                </Head>
                    <Card.Group itemsPerRow={3}>
                      <Card color='red'>
                      <Card.Content>
                        <Form>
                            <Form.Field>
                                <label>Applicant Name</label>
                                <input placeholder='Applicant Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Applicant Ethereum Address</label>
                                <input placeholder='Applicant Ethereum Address' />
                            </Form.Field>
                            <Form.Field>
                                <label>Applicant Email ID</label>
                                <input placeholder='Applicant Email ID' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                      </Form> 
                      </Card.Content>
                      </Card>

                   <Card color='red'>
                      <Card.Content>
                        <Form>
                            <Form.Field>
                                <label>University Name</label>
                                <input placeholder='University Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>University Ethereum Address</label>
                                <input placeholder='University Ethereum Address' />
                            </Form.Field>
                            <Form.Field>
                                <label>University Email ID</label>
                                <input placeholder='University Email ID' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                      </Form> 
                      </Card.Content>
                      </Card>

                    <Card color='red'>
                      <Card.Content>
                        <Form>
                            <Form.Field>
                                <label>Company Name</label>
                                <input placeholder='Company Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Company Ethereum Address</label>
                                <input placeholder='Company Ethereum Address' />
                            </Form.Field>
                            <Form.Field>
                                <label>Company Email ID</label>
                                <input placeholder='Company Email ID' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                      </Form> 
                      </Card.Content>
                      </Card>

                    </Card.Group>
            </div>
        );
    }
}

export default OwnerPortal;