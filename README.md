reactmdcweb
===========
[Material Components for Web](https://github.com/material-components/material-components-web)
encapsulated as React Components. Built using [React to CommonJS](https://github.com/goncalvesjoao/react-to-commonJS).

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
    - CardActionButton
  - CardMediaItem
- Toolbar
  - ToolbarSection
    - ToolbarTitle
- Main