/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("var Environment = __webpack_require__(1);\nconsole.log('.....');\nconsole.log('Build works');\nconsole.log('Base Url of the application : ' + Environment.BASE_URL);\nconsole.log('Application is running on env : ' + Environment.ENV );\nvar envDiv = document.createElement('div');\nenvDiv.innerHTML = Environment.ENV;\ndocument.body.appendChild(envDiv);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBFbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50Jyk7XG5jb25zb2xlLmxvZygnLi4uLi4nKTtcbmNvbnNvbGUubG9nKCdCdWlsZCB3b3JrcycpO1xuY29uc29sZS5sb2coJ0Jhc2UgVXJsIG9mIHRoZSBhcHBsaWNhdGlvbiA6ICcgKyBFbnZpcm9ubWVudC5CQVNFX1VSTCk7XG5jb25zb2xlLmxvZygnQXBwbGljYXRpb24gaXMgcnVubmluZyBvbiBlbnYgOiAnICsgRW52aXJvbm1lbnQuRU5WICk7XG52YXIgZW52RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbnZEaXYuaW5uZXJIVE1MID0gRW52aXJvbm1lbnQuRU5WO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbnZEaXYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = {\n    BASE_URL : 'http://localhost:8080',\n    ENV: 'dev'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQuanM/MjkzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBCQVNFX1VSTCA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgIEVOVjogJ2Rldidcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);