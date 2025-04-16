const textButton = document.getElementById("text-input");
const checkButton = document.getElementById("chwck-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click",() => {
    const lowerReplaced = textInput.value.toLOweCase().replace(/[^A-Za-z0-9]/g,"")

    if (textInput.value === "") {
        alert("please input a value")
    } else if (textInput.value.length === 1) {
        result.innerText = "${textInput.value} is a palindrome"
    } else if (lowerReplaced.value === [...lowerReplaced].reverse().join("")) {
        result.innerText = "${textInput.value} is a palindrome"
    } else {
        result.innerText = "${textInput.value} is a not palindrome"
        }
    }
);