# Textmarker - build instructions for AMO review team

## Summarized

__Source code:__  
The _src/_ folder contains the JavaScript files.  
The webpack bundled JS files go into the folder extension/.  

__dev process:__  
JavaScript gets _bundled_ using _webpack_, _babel_ and _gulp_.  

### Prerequisites

* Operating system: windows 7
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
gulp build
```
