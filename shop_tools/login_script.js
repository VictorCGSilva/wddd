const login = document.getElementById("login");

// console.log(login)

login.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log('form has been submitted');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    var email = document.getElementById("email").value;
    urlencoded.append("email", email);
    var password = document.getElementById("password").value;
    urlencoded.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://masontuft.com/loginShop", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(('plan type ' + result.plan_type[0].plan_type));
            console.log(('shop_name ' + result.plan_type[0].shop_name));
            console.log(('token ' + result.plan_type[0].token))

            window.location.replace("https://jmrcycling.github.io/WDD130/KOR/shop_tools/dashboard?plan_type=" + result.plan_type[0].plan_type + "&shop_name=" + result.plan_type[0].shop_name + "&token=" + result.plan_type[0].token);
        })
        .catch(error => {
            console.log('error', error);
            window.alert('Incorrect email or password, if you have not been set up as a user please go to our shop sign up page and sign up that way!!');
        });

})