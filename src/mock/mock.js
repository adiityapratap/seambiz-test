import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios, {delayResponse: 1000});

export default mock;