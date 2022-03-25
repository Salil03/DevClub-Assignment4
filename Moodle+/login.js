console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(".loginpanel"); // Fill the selector for the login element in ""
let login_text = login_element.innerText.split(" ");
let answer = "";
if (login_text[7] == 'first')
{
    answer = login_text[9];
}
else if (login_text[7] == 'second')
{
    answer = login_text[11];
}
else if (login_text[6] == 'add')
{
    answer = Number(login_text[7]) + Number(login_text[9]);
}
else if (login_text[6] == 'subtract')
{
    answer = Number(login_text[7]) - Number(login_text[9]);
}
const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;