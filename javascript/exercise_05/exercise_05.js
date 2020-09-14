
console.log("inside");

function createUserInfo(a,b){
    function checkPasswordIsCorrect(password){
        if(password==='password123')return true;
        return false;
    }
    return{
        name:a,
        checkPasswordIsCorrect
    }
}

userInfo = createUserInfo('John Doe', 'password123');
console.log(userInfo.name);
console.log(userInfo.checkPasswordIsCorrect('password123 '));