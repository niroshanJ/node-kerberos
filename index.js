'use strict';
const kerberos = require('kerberos');
const hostname = process.env.KERBEROS_HOSTNAME || 'hostname.example.com';


// In this function we will get the principal detail from Kerberos server
// Please refer: https://www.npmjs.com/package/kerberos#principalDetails
kerberos.principalDetails('HTTP', hostname, (err, details) => {
    console.log(err, details);
});