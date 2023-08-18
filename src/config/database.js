import firebird from "node-firebird";

const dbOptions = {
    host: 'localhost',
    port: 3050,
    database: 'C:\\ECODADOS.ECO',    
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: true, // set to true to lowercase keys
    role: null,            // default    
    pageSize: 4096        // default when creating database
};