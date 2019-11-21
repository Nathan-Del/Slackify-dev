import React, {Component} from 'react';
// import { BrowserRouter, Route} from 'react-router-dom';
const utils = require('./Login');

class CreateMessage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message:"", 
            channel:"",
            author: utils.token
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
    
    
    submit(channel){
        fetch(`http://localhost:8000/messages/${channel}`,
        {
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(data => alert("message crée !")
        .catch(err => console.log(err))
        .then(res => console.log(res.token))
        )
    }
    
    render (){
    return (
        <div>
            <form onSubmit={this.submit}>
                <label>
                    Nom de la Chaîne:
                    <input type="text" name="channel" id="channel" value={this.state.channel} onChange={this.handleChange}/>
                    Texte:
                    <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
                    {/* User:
                    <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChange}/> */}
                </label>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
            );
        }
    }

export default CreateMessage;