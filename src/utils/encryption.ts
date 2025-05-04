// Dependencies
import env from "./env";
import crypto from "crypto-js";

// Encrypt Function
export const EncryptString = (text: string) => {
    return crypto.AES.encrypt(text, env.app.ENCRYPTION_SECRET).toString();
};

export const DecryptString = (text: string) => {
    const bytes = crypto.AES.decrypt(text, env.app.ENCRYPTION_SECRET as string);
    return bytes.toString(crypto.enc.Utf8);
};
