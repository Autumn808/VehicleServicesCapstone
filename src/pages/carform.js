import React from 'react'
import { Button, Checkbox, Form, } from 'semantic-ui-react'

const CarForm= () => (
    <div style={styles}>
     <center>


  <Form>
    <Form.Field>

      <header> Car Information Form </header> 
      
      <label>Enter Milage at last Oil change</label>
      <input placeholder='OilChange' />
    </Form.Field>
    <Form.Field>
      <label>Enter Milage at last Tire Rotation</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

  </center>
  </div>
)

export default CarForm

const styles = {
    marginLeft: "1em",
    marginRight: "1em",
  };
    