import React, {Component} from 'react'

class PersonCard extends React.Component{
    handleClick(age){ 
        age =age+1;
    }

    render(){
        
        const {firstName, lastName, hairColor, age} = this.props;
        return(
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.handleClick(age)}>Birthday Button for  {firstName} {lastName}</button>
            </div>
        )
    }
        
    
    
}

export default PersonCard