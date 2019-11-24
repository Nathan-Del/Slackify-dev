import React, {useState} from 'react';
import LoginContext from '../../Components/Providers/LoginContext';



const LoginContextProvider = ({children}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [token, setToken] = useState(null);
    

        const constructor = (props) =>
        {
        // super(props);
        // this.state = {
        //     // username:"",
        //     // password:"",
        // }
            setUsername(username);
            setPassword(password);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        }
    
        const handleChange = (element) =>
        {
            const inputName = element.target.name;
            const inputValue = element.target.value;
            
        
            const statusCopy = Object.assign({}, this.state);
            statusCopy[inputName] = inputValue;
        
            this.setState(statusCopy);
        }
    
    
    
        const submit = (e) =>
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
                setToken(res.token);
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
            {children}
        </LoginContext.Provider>
        
        </main>
    );
}

export default LoginContextProvider;