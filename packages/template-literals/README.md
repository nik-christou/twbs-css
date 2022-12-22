# template-literals
Bootstrap CSS as template literals

## Installation

Install via npm:
```shell
npm install @twbs-css/template-literals
```

## Import

Example of importing bootstrap root css as template literal:
```javascript
import {RootCssTemplateLiteral} from '@twbs-css/template-literals';
```

Example of importing bootstrap root css as Lit tagged template literal:
```javascript
import {RootCssTaggedTemplate} from '@twbs-css/template-literals';
```

## Use case
Main use case is to allow easier css for web components (with string literals)
and for Lit elements components (with tagged templates).

Example using the tagged template literals in Lit element components:
```javascript
static get styles() {
    return [
        // other styles
        RootCssTaggedTemplate
    ];
}
```