import { bcrypt } from "bcrypt";

const saltRounds = 10;

export async function hashPassword(textPlainPassword) {
    await bcrypt.hash(textPlainPassword, saltRounds, function(err, hash) {
        if (err) {
            return null;
        } else {
            return hash;
        }
    });
}