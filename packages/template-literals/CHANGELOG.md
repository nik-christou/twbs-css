# Changelog

## 1.0.0
Initial implementation

## 1.0.1 (22/12/2022)
- Added `:host` in addition to the `:root` to work under web components
- Refactored `type` css to use only what is needed from `reboot` css instead of using the entire file
- Added `:host` media query for `prefers-reduced-motion` in addition to `:root` in `reboot` css

## 1.0.2 (22/12/2022)
- Added `:host` styles in `reboot` css to cover the same styles found for `body` 

## 1.0.4 (11/06/2023)
- Updated dependencies and now a new template is created that uses the Bootstrap CSS Layout implementation instead of the default bootstrap grid

## 2.0.0 (11/06/2023)
- Updated bootstrap dependency to v5.3.0
- Added new process to create an additional file for experimental CSS Grid Layout from bootstrap

## 2.0.1 (23/06/2023)
- Fixed issue with missing grid-layout exports in index.js