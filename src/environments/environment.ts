export const environment = {
    msal: {
        clientId: 'xxx',
        tenantId: 'xxx',
        redirect: 'http://localhost:4200'
    },
    graph: {
        uri: 'https://graph.microsoft.com/v1.0/me',
        scopes: ['openid','profile']
    }
};
