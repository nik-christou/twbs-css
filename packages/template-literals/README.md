# template-literals
The purpose of this node library is to provide an easy and maintainble way to use existing 
bootstrap customization tools and generate css exported as string and tagged literals that
can easily be integrated into web components.

## Installation

Install via npm:
```shell
npm install @twbs-css/template-literals
```

## Import

Example of importing bootstrap root css as template literal:
```javascript
import {HostCssTemplateLiteral} from '@twbs-css/template-literals';
```

Example of importing bootstrap root css as Lit tagged template literal:
```javascript
import {HostCssTaggedTemplate} from '@twbs-css/template-literals';
```

## Use case
Main use case is to allow easier css for web components (with string literals)
and for Lit elements components (with tagged templates).

Example using the string literals in plain web components:
```javascript
const template = document.createElement('template');
template.innerHTML = `
<style>
    ${HostCssTemplateLiteral}
</style>
<<add rest of html template>>`;
```

Example using the tagged template literals in Lit element components:
```javascript
static get styles() {
    return [
        HostCssTaggedTemplate
    ];
}
```

## Notes:
- Bootstrap `root` css will not work in case of web components since `:root` is only applicable to document. 
- You can use the `HostCssTemplateLiteral` or `HostCssTaggedTemplate` which is the same as root but will work for web components under shadow dom.
- `Type` css does not include the entire `reboot` css so in case you use both `reboot` and `type` just make sure `type` is the last item, so it can override rules.
- `Reboot` css includes both `:root` as well as `:host` media query for `prefers-reduced-motion`