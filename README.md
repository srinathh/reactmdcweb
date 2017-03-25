reactmdcweb
===========
[Material Components for Web](https://github.com/material-components/material-components-web)
encapsulated as React Components. Compiled to CommonJS using [React to CommonJS](https://github.com/goncalvesjoao/react-to-commonJS).

These components use the CSS and JS directly from Material Components for Web.
They use the [Simpler Approach](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-simple-approach-wrapping-mdc-web-vanilla-components) 
of wrapping MDC-Web vanilla components and are suitable for use in a Browser
Context where they can be mounted in a DOM.  

Usage
=====

Install material components for web in your package
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

Import components of interest from the reactmdcweb package into 
your app. Currently this is not published to npm since it's not 
yet stable, so you will have to do a relative import to where
ever you have saved the package.
```
import {Card, CardPrimary, CardTitle, CardSubTitle} from '../../github.com/srinathh/reactmdcweb' 
```

Use the Components
```
<Card>
    <CardPrimary>
        <CardTitle>Title</CardTitle>
        <CardSubTitle>SubTitle</CardSubTitle>
    </CardPrimary>
</Card>
```

Building
========
```
npm run build-commonjs
```

Components Available
====================
- Card
  - CardPrimary
    - CardTitle
    - CardSubTitle
  - CardSupportingText
  - CardActions
  - CardMediaItem
- Toolbar
  - ToolbarSection
    - ToolbarTitle
- Main
- Button