function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]"
 
    let password = ""

    for (let i = 0; i < 8; i++) {
        const randonNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randonNumber, randonNumber + 1)

        console.log(password)
    }
}
generatePassword()