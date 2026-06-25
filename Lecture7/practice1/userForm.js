function userForm(req,res){
    res.write(`<form action="/submit" method="post">
        <input type="text" name="Name" placeholder="enter name">
        <br>
        <br>
        <input type="text" name="password" placeholder="password">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>`)
}

module.exports= userForm;