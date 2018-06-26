# My React Sandbox

This repo is a place where I build various components for React. Many of these are most specifically designed to be reusable and to some extent customizable.

## Mostly finished
The following is a list of the more complete/polished:
* ModalWrapper
    * Higher order component with built in options passed in as props.
    * Wraps developers jsx or component in a pop up modal with predefined functions.
* Table
    * Component that displays data, passed in as a prop, in a standard table.
    * Implements cell and row call backs
* Tabs
    * Higher Order Component that hot swaps children based on clicks.
* DragDrop
    * Higher Order Component that allows for drag n drop reordering.
    * No call backs yet for server updating.
* Hamburger
    * Fast hamburger demo cobbled together for a student.


## Unfinished:
* DevHeader
    * A cli package in progress that scans the src directory for js files for a comment and sets up auto routing to the components using react-router-dom.
    * Meant as a dev-tool not as a route builder


## Future Ideas to implement:

* Custom Link tag for auto styling based on current route.
    * Does not push to same route?

* Slider bar/selector


