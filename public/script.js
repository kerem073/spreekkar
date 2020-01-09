
let applied = false;

window.addEventListener('load', function () {
    const button = document.getElementById('submit');
    let ID_USER;
    if(button){
        button.addEventListener('click', async event => {
            const nameUser = document.getElementById('name_id').value;
            const ageUser = document.getElementById('age_id').value;
            ID_USER = String(nameUser + ageUser);
            const data = {nameUser, ageUser, ID_USER};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);
            document.getElementById('form_id').style.display = "none";
            document.getElementById('success').style.display = "block";
            applied = true;
        });
        console.log("i am working");
    }
})



setInterval(fetch('/api'),3000);