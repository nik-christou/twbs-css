export const NavbarCssTemplateLiteral = `
.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
  --bs-navbar-toggler-border-radius: var(--bs-border-radius);
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: justify;
      justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.navbar > .container-xxl, .navbar > .container-xl, .navbar > .container-lg, .navbar > .container-md, .navbar > .container-sm, .navbar > .container,
.navbar > .container-fluid {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: inherit;
      flex-wrap: inherit;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: justify;
      justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  text-decoration: none;
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}

.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--bs-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}

.navbar-collapse {
  -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
  -ms-flex-positive: 1;
      flex-grow: 1;
  -ms-flex-align: center;
      align-items: center;
}

.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    -ms-flex-direction: row;
        flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    -ms-flex-positive: 1;
        flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    -webkit-transform: none !important;
            transform: none !important;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
        flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    -ms-flex-direction: row;
        flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    -ms-flex-positive: 1;
        flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    -webkit-transform: none !important;
            transform: none !important;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
        flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    -ms-flex-direction: row;
        flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    -ms-flex-positive: 1;
        flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    -webkit-transform: none !important;
            transform: none !important;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
        flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    -ms-flex-direction: row;
        flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    -ms-flex-positive: 1;
        flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    -webkit-transform: none !important;
            transform: none !important;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
        flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -ms-flex-pack: start;
        justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    -ms-flex-direction: row;
        flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    -ms-flex-positive: 1;
        flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    -webkit-transform: none !important;
            transform: none !important;
    transition: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
        flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -ms-flex-pack: start;
      justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  -ms-flex-direction: row;
      flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: -ms-flexbox !important;
  display: flex !important;
  -ms-flex-preferred-size: auto;
      flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  -ms-flex-positive: 1;
      flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  -webkit-transform: none !important;
          transform: none !important;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-positive: 0;
      flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

[data-bs-theme=dark] .navbar-toggler-icon {
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
`;