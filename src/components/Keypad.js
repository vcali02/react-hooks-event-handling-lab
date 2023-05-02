// Code Keypad Component Here

function passwordChangeHandler(){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange= {passwordChangeHandler}></input>
        </div>
    )
}

export default Keypad;