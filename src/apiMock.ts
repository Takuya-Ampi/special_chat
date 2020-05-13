import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, {delayResponse: 1000});

mock.onGet('/navigations').reply(200, {
  items: [
    {
      content: 'unko',
      icon: {
        src: 'unko.jpg',
        alt: 'unko'
      }
    },
    {
      content: 'chinko',
      icon: {
        src: 'chinko.jpg',
        alt: 'chinko'
      }
    },
    {
      content: 'manko',
      icon: {
        src: 'manko.jpg',
        alt: 'manko'
      }
    },
  ]
})

mock.onGet('/friends').reply(200, {
  data: [
    {
      id: 1,
      name: 'user1',
      comment: 'aiueo',
      icon: {
        src: 'unko.jpg',
        alt: 'unko'
      }
    },
    {
      id: 2,
      name: 'user2',
      comment: null,
      icon: {
        src: 'unko.jpg',
        alt: 'unko'
      }
    },
    {
      id: 3,
      name: 'user3',
      comment: 'aiueo',
      icon: {
        src: 'unko.jpg',
        alt: 'unko'
      }
    },
    {
      id: 4,
      name: 'user4',
      comment: null,
      icon: {
        src: 'unko.jpg',
        alt: 'unko'
      }
    }
  ]
})


export default axios;
