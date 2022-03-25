import React, {Component} from 'react'

class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    handleClick = () => { 
        
        let currentAge = this.state.age + 1;
        console.log(currentAge);
        this.setState({
            age: currentAge
        })
    }

    render(){
        
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick}>Birthday Button for  {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard