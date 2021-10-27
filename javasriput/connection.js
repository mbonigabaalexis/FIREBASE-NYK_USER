
// button click
document.getElementById("btnsubmit").addEventListener('click', function (e) {
    e.preventDefault();
    // input value
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    // store data base
    let user = { firstName: fname, lastName: lname }
    db.collection('users').add(user);

});
//

let userList = document.getElementById('user_list');

db.collection("users")
    .get()
    .then(function (snapshot) {
        snapshot.docs.forEach(function (userDocument) {
        let userIterm=document.createElement("li");
        userIterm.innerHTML=userDocument.data().
        firstName+" "+userDocument.data().lastName;
        userList.appendChild(userIterm);

        });
    });
