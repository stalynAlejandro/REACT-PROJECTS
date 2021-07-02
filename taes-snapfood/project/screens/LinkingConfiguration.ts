import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          LoginScreen: 'Login',
          RegisterScreen: 'Register',
          ResetPasswordScreen: 'ResetPassword'
        },
      },
      Search: {
        screens: {
          SearchScreen: 'Search',
          Search2Screen: 'Search2',
          SearchedScreen: 'Searched'
        },
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
      RecipeScreen: 'Recipe'
    },
  },
};
