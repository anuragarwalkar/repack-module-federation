/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Federated, ScriptManager } from '@callstack/repack/client';
  
  ScriptManager.shared.addResolver(async (scriptId, caller) => {
    // Create resolve function
    const resolveURL = Federated.createURLResolver({
      containers: {
        app1: 'http://localhost:9000/[name][ext]',
      },
    });
  
    // Try to resolve URL based on scriptId and caller
    const url = resolveURL(scriptId, caller);
    if (url) {
      return { url, 
        query: {
        platform: Platform.OS,
      }, 
      cache: false, // For development
    };
    }
  });

AppRegistry.registerComponent(appName, () => App);
