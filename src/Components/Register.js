import React, {Component} from 'react';

class Register extends Component{

constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
}

handleChange(element){
    const inputName = element.target.name;
    const inputValue = element.target.value;
    

    const statusCopy = Object.assign({}, this.state);
    statusCopy[inputName] = inputValue;
   
    this.setState(statusCopy);
    }


submit(){
    fetch("http://localhost:8000/users",
    {
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(this.state),
    })
    .then(data => alert("user crée ")
    .catch(err => console.log(err))
    )
}

render (){
return (
    <div>
        <form action="/" onSubmit={this.submit}>
            <label>
                Username:
                <input type="text" name="username" id="username" value={this.state.user} onChange={this.handleChange}/>
                Password:
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Envoyer"/>
        </form>
    </div>
        );
    }
}
export default Register;