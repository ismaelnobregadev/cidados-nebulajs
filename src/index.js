/* eslint-disable */
import { AuthType } from '@qlik/sdk';
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    //connectionType: '<AuthType.SOME_CONNECTION_TYPE>',
    url: 'qap.sebrae.com.br',
    appId: '96a7d192-860d-4ecc-90e7-a404e81154b2',

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
    id: 'e3816763-68f3-4ffe-956f-824e62eb626d',
  });

  
}

run();
