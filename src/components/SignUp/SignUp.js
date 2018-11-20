import React, { Component } from 'react';
import Form from '../UI/Form/Form';

class SignUp extends Component {
    state = {
        formData:{
            name:{
                element:'input',
                value: '',
                label: true,
                labelText: 'First Name',
                config: {
                    name: 'name_input',
                    placeholder:'Enter Name',
                    type: 'text'
                }
            },
            lastname:{
                element:'input',
                value: '',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'lastname_input',
                    placeholder:'Enter Last Name',
                    type: 'text'
                }
            }
        }
    }

    submitFormHandler = (e) =>{
        e.preventDefault();
       // console.log(this.state);
       let dataToSubmit = {};
       for (let key in this.state.formData){
           dataToSubmit[key] =  this.state.formData[key].value; //only need values of the form data.
       }
       // axios to post data to server
       console.log(dataToSubmit);
    }

    updateForm = (formData)=>{
        this.setState({formData})
    }
    render() {
        return (
            <div className = "container">
              <Form
                  onSubmit = {this.submitFormHandler}
                  data = {this.state.formData}
                  buttonName = "submit form"
                  change = { (formData) => this.updateForm(formData)}
              />
            </div>
        );
    }
}

export default SignUp;