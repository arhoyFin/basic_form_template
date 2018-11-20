import React from 'react';

const Form = (props) => {

    const renderField = () =>{
        const formArray = [];
        for(let elementName in props.data){
            formArray.push(
                {
                    id:elementName,
                    settings: props.data[elementName]
                }
            )
        }
        return formArray.map( (item,i)=>(
            <div key = {i}>
                {renderTemplates(item)}
            </div>
        ) )
    }

    const changeHandler = (e,id)=>{
        const newState = props.data;
        newState[id].value = e.target.value;
        props.change(newState);

    }
   const renderTemplates = (data) =>{
        let formTemplate = "";
        let values = data.settings;
        switch(values.element){
            case('input'):
                formTemplate = (
                    <React.Fragment>
                        {values.label ? <label htmlFor="">{values.labelText}</label>: null}
                        <input 
                            // type= {values.config.type}
                            // placeholder = {values.config.placeholder}
                            {...values.config} // destructure all these inside the value object
                            value = {values.value}
                            onChange = { (e)=> changeHandler(e,data.id)}
                         />
                    </React.Fragment>
                 
                )
                break;
            default:
                formTemplate = null
        }
        return formTemplate;
    }

    return (
     
        <form onSubmit = {props.onSubmit}>   
           { renderField() } 
      
            <button>{props.buttonName}</button>
      </form>
    );
};

export default Form;