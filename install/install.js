#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🔧 Welcome to IPAM Self Installer");

rl.question("Enter your Supabase Project URL: ", function(projectUrl) {
    rl.question("Enter your Supabase Anon Public Key: ", function(anonKey) {
        const config = {
            supabaseUrl: projectUrl.trim(),
            supabaseAnonKey: anonKey.trim()
        };

        fs.writeFileSync(path.join(__dirname, '../src/db.js'),
            `export const SUPABASE_URL = '${config.supabaseUrl}';\nexport const SUPABASE_ANON_KEY = '${config.supabaseAnonKey}';\n`);

        console.log("✅ Supabase credentials saved to src/db.js");
        rl.close();
    });
});
