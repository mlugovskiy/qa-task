const baseUrl = 'https://enotes.pointschool.ru';
export const testConfig = {
    login: 'test',
    password: 'test',
    baseUrl: baseUrl,
    routes: {
      login: '/login',
      basket: '/basket',
      main: '/'
    },
    requests: {
      basketGet: '/basket/get',
      clearBasket: '/basket/clear'
    }
  }