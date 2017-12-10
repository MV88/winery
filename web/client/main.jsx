/*
 * Copyright 2017
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = (config, pluginsDef) => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    const {connect} = require('react-redux');

    const startApp = () => {
        const StandardApp = require('../components/app/StandardApp');

        const {pages, initialState, storeOpts, appEpics = {}} = config;

        const StandardRouter = connect((state) => ({
            locale: state.locale || {},
            pages
        }))(require('../components/app/StandardRouter'));

        const appStore = require('../stores/StandardStore').bind(null, initialState, {
        }, {...appEpics});

        const initialActions = [];

        const appConfig = {
            storeOpts,
            appEpics,
            appStore,
            pluginsDef,
            initialActions,
            appComponent: StandardRouter,
            printingEnabled: true
        };

        ReactDOM.render(
            <StandardApp {...appConfig}/>,
            document.getElementById('container')
        );
    };

    if (!global.Intl ) {
        // Ensure Intl is loaded, then call the given callback
        LocaleUtils.ensureIntl(startApp);
    } else {
        startApp();
    }
};
