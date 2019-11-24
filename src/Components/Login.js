import React, {Component} from 'react';
import {LoginContext} from './Providers/LoginContext';



// class Login extends Component{
    
const Login = () => {
    // constructor(props) 
    // {
    //     super(props);
    //     this.state = {
    //         username:"",
    //         password:"",
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    //     this.submit = this.submit.bind(this);
    // }

// handleChange(element){
//     const inputName = element.target.name;
//     const inputValue = element.target.value;
    

//     const statusCopy = Object.assign({}, this.state);
//     statusCopy[inputName] = inputValue;
   
//     this.setState(statusCopy);
//     }



// submit(e){
//     e.preventDefault()
//     fetch("http://localhost:8000/login",
//     {
//         headers: {
//             'Accept' : 'application/json',
//             'Content-Type' : 'application/json',
//         },
//         method: 'POST',
//         body: JSON.stringify(this.state),
//     })
//     .then(data => data.json()
//     // .then(res => console.log(res.token))

//     .then(res => {
//         let token = res.token;
//         console.log("token: ", token);
//     })

//     .then(() => alert("connecté"))
//     )
// }



// render (){
//     return 
//     (
//         <div>
//                 <form onSubmit={this.submit}>
//                     <label>
//                         Username:
//                         <input type="text" name="username" id="username" value={this.state.user} onChange={this.handleChange}/>
//                         Password:
//                         <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
//                     </label>
//                     <input type="submit" value="Envoyer"/>
//                 </form>
//         </div>
//     );
// }
// }


return(
    <div style={{ border: 'solid 5px #2632F0'}}>
        <LoginContext.Consumer>
        {context => {
            console.log(context.token)
                return(
                    <div>
                        <form onSubmit={context.submit}>
                         <label>
                             Username:
                             <input type="text" name="username" id="username" value={context.username} onChange={context.handleChange}/>
                             Password:
                             <input type="password" name="password" id="password" value={context.password} onChange={context.handleChange}/>
                         </label>
                         <input type="submit" value="Envoyer"/>
                     </form>
                <p>{context.token}</p>
                    </div>
                )
        }}
        </LoginContext.Consumer>
    </div>
    
);
}

export default Login;
