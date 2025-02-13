import fs from 'fs';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load existing .env variables
dotenv.config();

const ENV_FILE = '.env';
const SECRET_KEY = 'JWT_SECRET';

// Check if JWT_SECRET already exists
if (!process.env[SECRET_KEY]) {
    // Generate a random secret key
    const newSecret = crypto.randomBytes(32).toString('hex');

    // Read existing .env file content
    let envContent = fs.existsSync(ENV_FILE) ? fs.readFileSync(ENV_FILE, 'utf8') : '';

    // Append or update the JWT_SECRET
    if (envContent.includes(`${SECRET_KEY}=`)) {
        envContent = envContent.replace(new RegExp(`${SECRET_KEY}=.*`), `${SECRET_KEY}=${newSecret}`);
    } else {
        envContent += `\n${SECRET_KEY}=${newSecret}\n`;
    }

    // Write the updated content back to .env
    fs.writeFileSync(ENV_FILE, envContent);

    console.log(`✅ JWT_SECRET generated and saved to ${ENV_FILE}`);
} else {
    console.log(`🔒 JWT_SECRET already exists in ${ENV_FILE}`);
}
