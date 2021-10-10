const fs = require('fs');
const crypto = require('crypto');

function readPassword() {
    let code = fs.readFileSync("./password.txt", "utf-8")

    return code;
}

function writePassword(hex) {
    fs.writeFileSync("./hashed.txt", hex);
}

let code = readPassword();

const hex = crypto.createHash("sha512").update(code).digest("hex");
writePassword(hex);