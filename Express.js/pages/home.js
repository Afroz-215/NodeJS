// function home(){
//     return "Hello from es way ";
// }

// function about(){
//     return "Hello from about page with es way ";
// }

// // export {home,about};
// module.exports = {home,about}


module.exports = function home(){
    return `<h1>Hello, This is home page . <br><br> Wlcm to my home page </h1> <br><br> <a href='/login'>Go to login </a>`;
}