let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]"
 
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randonNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randonNumber, randonNumber + 1)

        const inputEl = document.querySelector("#password")
        inputEl.value = password
    }
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function () {
    const passwordLength = passwordLengthEl.value
    generatePassword()
})

generatePassword()