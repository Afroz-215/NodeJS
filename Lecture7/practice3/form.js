let form =((req,res)=>{
    res.end(`
        
    <form action="/submit" method="post">
        <label for="name">Enter your name</label>
        <input type="text" name="name" placeholder="enter your name" >
        <br>
        <br>
        <label for="password">Enter password</label>
        <input type="password" name="password" placeholder="enter password">
        <br>
        <br>
        <button type="submit">submit</button>
    </form>
        `);
})

module.exports = form;