/* eslint-disable */
import { AuthType } from '@qlik/sdk';
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    //connectionType: '<AuthType.SOME_CONNECTION_TYPE>',
    url: 'qap.epl.gov.br/',
    appId: '401ff090-be77-4337-a9de-0827ad87cca0',

    // you should use only one of below keys
    // based on your `connectionType`
    // clientId: '<Qlik OAuth client id>',
    // webIntegrationId: '<Qlik web integration id>',
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  // n.render({});

  n.render({
    element: document.querySelector('.object'),
    id: 'pPWRjP',
  });

  
  
}

run();
