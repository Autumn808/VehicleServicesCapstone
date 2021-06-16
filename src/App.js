import './App.css';
import { withAuthenticator } from "aws-amplify-react";
import signUpConfig from "./config/signUpConfig";
import React, { Grid, Image, Container, Header, Menu, Segment, Divider, List,} from 'semantic-ui-react'
import CarForm from './pages/carform';

function App(){
  return (
    <div style={styles}>
     <center>
     <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          AVS
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
        <Menu.Item as='a'>Data Dashboard</Menu.Item>
        <Menu.Item as='a'>Insurance Market Place </Menu.Item>
        <Menu.Item as='a'>Vehicle Store</Menu.Item>
        <Menu.Item as='a'>Profile</Menu.Item>
        <Menu.Item as='a'>Car service Infomation</Menu.Item>
        
        <Menu.Item as='a'>Sign Out</Menu.Item>
      </Container>
    </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" title="Home page title" style={{ textAlign: "center" }}>
        Amazon Vehicle Service
        </Header>
        <Image src='/images/pexels-yurii-hlei-1545743.jpg' />
        </Container>
        </center>


    <Segment vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container>
    <Grid stackable divided columns={4}>
    <Grid.Row>
    <Grid.Column>
    <Header as="h2">Insurance Market Place</Header>
      <Image src='/images/pexels-andrea-piacquadio-3760067.jpg' />
    </Grid.Column>

    <Grid.Column>
    <Header as="h2">Document Storage</Header>
      <Image src='/images/pexels-jessica-lewis-583847.jpg' />
    </Grid.Column>

    <Grid.Column>
    <Header as="h2">Car Data Portal</Header>
      <Image src='/images/pexels-energepiccom-159888.jpg' />
    </Grid.Column>


    <Grid.Column>
    <Header as="h2">Vehicle Store</Header>
      <Image src='/images/pexels-anna-shvets-4482900.jpg' />
    </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
</Segment>

<Segment>
    <CarForm/>
    </Segment>


<Segment>

  <center>
<Header as="h2">Dashboard</Header>
      <Image src='/images/image-1.png' />
      </center>
    
  </Segment>



<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Buy a Car on Amazon' />
         
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Car parts on Amazon' />
           
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Your Garage on Amazon' />
          
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Thank you for stopping by AVS' />
           
          </Grid.Column>
        </Grid>

        <Divider inverted section />
  
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>

    </div>
  );
  }

  

export default withAuthenticator(App, {
  usernameAttributes: "email",
  signUpConfig,
});

const styles = {
  marginLeft: "1em",
  marginRight: "1em",
};
  