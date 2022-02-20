import react, {useReducer} from "react";


const initialState = {
    firstName: {
        value: '',
        error: ""
    },
    lastName: {
        value: '',
        error: ""
    },
    email: {
        value: '',
        error: ""
    }
}



function reducer(state, action){
    return{
        ...state,
        [action.type]: action.payload
        
    };
    
}

function errorCheck(name, value, size){
    console.log(name)
    if(name === 'email'){
        console.log('yes')
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            return (false)}
        return (true)
        }else{
        if(value.length > 0 && value.length < size){
            return true
        }else{
            return false
        }
    }

}


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let errormsg = ''
    function handleChange(e, size, message,) {
        const { name, value} = e.target;
        if(errorCheck(name, value, size) === true){
           errormsg = message;
        }
        dispatch({
            type: name,
            payload: {
                value: value,
                error: errormsg
            }
        })
        

    }


    return(
    <div>
        <form>
        <p>First Name:</p>
        {state.firstName.error !== null && (
        <p><strong className="error">{state.firstName.error}</strong></p>
        )}
       
        <input 
            type="text" 
            name="firstName" 
            value={state.firstName.value}
            onChange={(e) => handleChange(e, 2,'First name must be at least 2 characters' )}
        />
        <p>Last Name:</p>
        {state.lastName.error !== null && (
        <p><strong className="error">{state.lastName.error}</strong></p>
        )}
        <input 
            type="text" 
            name="lastName" 
            value={state.lastName.value}
            onChange={(e) => handleChange(e, 2,'Last name must be at least 2 characters' )}
        />
        <p>Email:</p>
        {state.email.error !== null && (
        <p><strong className="error">{state.email.error}</strong></p>
        )}
        <input 
            type="text" 
            name="email" 
            value={state.email.value}
            onChange={(e) => handleChange(e, 5,'You must enter a valid email' )}
        />
        </form>
    </div>
)
}


