var Environment = require('./environments/environment');
console.log('.....');
console.log('Build works');
console.log('Base Url of the application : ' + Environment.BASE_URL);
console.log('Application is running on env : ' + Environment.ENV );
var envDiv = document.createElement('div');
envDiv.innerHTML = Environment.ENV;
document.body.appendChild(envDiv);