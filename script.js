function sendDataByGetMethod() {
    let userData = {
        userName: document.getElementById('name').value,
        userSurname: document.getElementById('surname').value,
        userAge: document.getElementById('age').value,
        userAdress: document.getElementById('adress').value
    };

    let flag = document.getElementById('age').value > 0 && document.getElementById('age').value < 100;
    if (flag) {
        let xhr = new XMLHttpRequest();
        userData.userName += '.ValidatedByGET';
        userData.userSurname += '.ValidatedByGET';
        userData.userAge += '.ValidatedByGET';
        userData.userAdress += '.ValidatedByGET';

        xhr.open("GET", "/userGet?userName=" + userData.userName + "&userSurname=" + userData.userSurname +
            "&userAge=" + userData.userAge + "&userAdress=" + userData.userAdress);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }
}

function sendDataByPostMethod() {

    let userData = {
        userName: document.getElementById('name').value,
        userSurname: document.getElementById('surname').value,
        userAge: document.getElementById('age').value,
        userAdress: document.getElementById('adress').value
    };

    let flag = document.getElementById('age').value > 0 && document.getElementById('age').value < 100;
    if (flag) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/userPost");
        xhr.setRequestHeader("Content-type", "application/json");

        userData.userName += '.ValidatedByPOST';
        userData.userSurname += '.ValidatedByPOST';
        userData.userAge += '.ValidatedByPOST';
        userData.userAdress += '.ValidatedByPOST';

        xhr.send(JSON.stringify(userData));
    }
}

