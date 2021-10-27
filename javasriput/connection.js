
// button click
document.getElementById("btnsubmit").addEventListener('click', async function (e) {
    e.preventDefault ();
    // input value
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    // Add  data in Firebase
    let user = { firstName: fname, lastName: lname }
    await db.collection('users').add(user);
    location.reload();

});
// READ DATA AND VIEW IN PAGE 

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
