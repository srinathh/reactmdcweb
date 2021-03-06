reactmdcweb
===========
[Material Components for Web](https://github.com/material-components/material-components-web)
encapsulated as React Components. These components use the CSS and JS directly from Material Components for Web and by and large implement the [Simpler Approach](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components) 
of integrating with frameworks. These are therefore suitable for use in Browser/Webview contexts.

The intent of this project is to build a completely non-opinionated, [flexible
and modular](http://srinathh.github.io/blog/modular-flexible-react-container-components/)
plain vanilla wrapping of Material Components of Web without any magic. We won't make
any assumptions in how the components should be composited beyond the
documented specifications and let you use your nodes as children.

The setup for compiling to CommonJS uses [React to CommonJS](https://github.com/goncalvesjoao/react-to-commonJS) project.

Repositories
============
- GitHub repository: [https://github.com/srinathh/reactmdcweb](https://github.com/srinathh/reactmdcweb)
- NPM package: [https://www.npmjs.com/package/reactmdcweb](https://www.npmjs.com/package/reactmdcweb)

Usage
=====

## 1. Import CSS for material components for web into your app.
Install material components for web in your app
```
npm install --save material-components-web
```

Import the default css from material-components-web in your app
```
import 'material-components-web/dist/material-components-web.css'
```

Alternatively to importing the full CSS, you can also import 
only the CSS belonging to the components of interest like this.
```
import '@material/card/dist/mdc.card.min.css'
```

## 2. Install 'reactmdcweb` package
```
npm install --save reactmdcweb
```

## 3. Import required components into your app 
```
import {Card, CardPrimary, CardTitle, CardSubTitle} from 'reactmdcweb'
```

## 4. Use the Components
```
<Card>
    <CardPrimary>
        <CardTitle>Title</CardTitle>
        <CardSubTitle>SubTitle</CardSubTitle>
    </CardPrimary>
</Card>
```

Compiling
=========
```
npm run build-commonjs
```

Components
==========
These UI elements have currently been implemented. More to come.

- Card Components
  - Card,
  - CardPrimary,
  - CardTitle,
  - CardSubTitle,
  - CardActions,
  - CardActionButton,
  - CardSupportingText,
  - CardMediaItem
- Toolbar Components
  - Toolbar, 
  - ToolbarTitle, 
  - ToolbarSection, 
- Main
- Drawer Components
  - TemporaryDrawer,
  - TemporaryDrawerContent,
  - TemporaryDrawerToolbarSpacer
- Button
- Fab
- List Components
  - List,
  - ListItem
  - ListItemText
- Text Input
  - TextField
  - TextFieldInput