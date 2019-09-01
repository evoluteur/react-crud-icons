# React-CRUD-Icons &middot; [![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/evoluteur/react-crud-icon/blob/master/LICENSE.md) [![npm version](https://img.shields.io/npm/v/react-crud-icon)](https://www.npmjs.com/package/react-crud-icon) 


React-CRUD-Icons is a set of SVG icons for CRUD (Create, Read, Update, Delete) apps. 


### 45 SVG Icons

Names: account, add, alert, apps, bars, browse, cards, check, collapse, comment, comments, compare, dashboard, delete, dots, dots-v, down, down2, download, drag, edit, error, expand, export, favorite, filter, help, hide, import, info, json, list, paperclip, pie, remove, save, search, settings, show, stats, treemap, undo, up, up2, upload.

![Screenshot](screenshots/icons.png)


### 2 Themes

Themes: light, dark.

![Screenshot](screenshots/hover.png)


### 6 Sizes

Sizes: tiny, small, medium, large, big, huge.

![Screenshot](screenshots/sizes.png)

## Installation

The package can be installed via [npm](https://www.npmjs.com/package/react-crud-icons):

```
npm install react-crud-icons --save
```

You’ll need to install React and PropTypes separately since those dependencies aren't included in the package. 

Below is a simple example of how to use the component in a React view. You will also need to include the CSS file from this package (or provide your own). The example below shows how to include the CSS from this package if your build system supports requiring CSS files (Webpack is one that does).

```js
import React from "react";
import Icon from "react-crud-icons";

import "../node_modules/react-crud-icons/dist/react-crud-icons.css";

class Example extends React.Component {
  render() {
    return (
      <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
      />
    );
  }
}
```


## License

Copyright (c) 2019 [Olivier Giulieri](https://evoluteur.github.io/).

react-crud-icons is released under the [MIT license](http://github.com/evoluteur/react-crud-icons/blob/master/LICENSE.md).

To suggest a feature or report a bug: [https://github.com/evoluteur/react-crud-icons/issues](https://github.com/evoluteur/react-crud-icons/issues)
 