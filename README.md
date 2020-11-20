# vynd

Pull updated origin/main.

Run `yarn install` to install all dependencies.

To preview the app using the Expo client, run `yarn start`.

To get on-demand video streaming using cloudfront, the `expo-av` package is used. Replace the `uri` with the cloudfront link "https://d2h74skj6dqe4u.cloudfront.net/PXL_20201021_215704455.mpd" to test. See `/src/screens/Discover/discover.js` for an implementation.