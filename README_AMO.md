# Textmarker - build instructions for AMO review team

## Summarized

__Source code:__  
The _src/_ folder contains the JavaScript ans SASS source files.

_webpack_ is used for precompiling and bundling.  

__Production code:__
The _extension/_ folder contains the addon code.

### Prerequisites

* __node.js__ v6.11.4
* __npm__ 5.6.0

### Installing modules

__Run the following from console/terminal (root folder):__  
for installing all required node modules (see: _package.json_)
```
npm install
```

### Webpack
__Run the following from console/terminal (root folder):__  
for bundling the source code
```
npm run prod
```
