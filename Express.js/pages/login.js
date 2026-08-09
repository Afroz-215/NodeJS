function login(){
    return `<form action='submit' method='post'>
        <input type='text' placeholder='enter your name' />
        <br>
        <br>
        <input type='text' placeholder='enter your password' />
        <br>
        <br>
        <button type='submit'>Submit</button>
        </form>`;
}

module.exports =login