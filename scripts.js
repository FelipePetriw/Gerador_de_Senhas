
const inputEl = document.querySelector("#password")

let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]"
 
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randonNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randonNumber, randonNumber + 1)
    }
    inputEl.value = password
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function () {
    const passwordLength = passwordLengthEl.value
    generatePassword()
})

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)

generatePassword()