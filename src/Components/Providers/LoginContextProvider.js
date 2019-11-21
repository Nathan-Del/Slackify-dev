import React, {useState} from 'react';
import LoginContext from './LoginContext';

let token;

const LoginContextProvider = () => {


        constructor(props) 
        {
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        }
    
        handleChange(element)
        {
            const inputName = element.target.name;
            const inputValue = element.target.value;
            
        
            const statusCopy = Object.assign({}, this.state);
            statusCopy[inputName] = inputValue;
        
            this.setState(statusCopy);
        }
    
    
    
        submit(e)
        {
            e.preventDefault()
            fetch("http://localhost:8000/login",
            {
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state),
            })
            .then(data => data.json()
            // .then(res => console.log(res.token))
        
            .then(res => {
                let token = res.token;
                console.log("token: ", token);
            })
        
            .then(() => alert("connecté"))
            )
        }
    
    
    

    return(
        <main>
        <LoginContext.Provider
        value={{
            constructor,
            submit,
            handleChange
        }}>

        </LoginContext.Provider>
        
        </main>
    );
}

export default LoginContextProvider;