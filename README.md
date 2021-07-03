# Dialogs Js

Dialogs JS is the npm package for displaying various modals (rename, new folder, permissions).
Dialogs JS relies on [Bootstrap](https://getbootstrap.com/) for modals templating.

The sole responsablity of any dialog/modal is to collect user input
( +validations ) and notify interested parties (via events) about submited
data i.e. pass collected data via `trigger` method.

Note that dialog do not know where and how to send collected data as such a
task is outside of their scope.

## Installation

Install all nodejs dependent packages:

    $ npm i  # looks in package.json and installs dependencies

