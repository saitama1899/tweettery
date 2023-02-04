# 🐦 Tweettery

With Tweettery you can get a quick summary of (almost) any Twitter account, for free. You will be able to check what type of content has been doing lately and assess whether to follow him or not.

This is a 1-week project in order to participate at [@midudev](https://www.github.com/midudev) hackathon: [midudev-cohere-2023](https://github.com/topics/midudev-cohere-2023), with main functionality on [co:here AI](https://cohere.ai/). Expect a lot of space for code, accessiblity and user experience improvements!

- APP: [tweettery.vercel.app](tweettery.vercel.app)
- API: [tweettery-api.vercel.app](tweettery-api.vercel.app)

![Desktop preview](https://i.ibb.co/b2KVFnM/screen.png)

## 💻 APP Built with
- [Vite](https://vitejs.dev/) For build the project.
- [ReactJs](https://es.reactjs.org/) For User UI.
- [Framer Motion](https://www.framer.com/motion/) For frontend animations.
- [Tailwind](https://tailwindcss.com) For frontend styles.

## 🗝 API Built with
- [Express](https://expressjs.com/es/) For make the API.
- [Co:here AI](https://cohere.ai/) For get summary data given a raw Twitter account timeline.
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api) For get the user id, avatar, and the timeline given a username.

## 🛠️ APP Installation and usage
```bash
git clone https://github.com/saitama1899/tweettery
cd tweettery
npm install
npm run dev
```

## 🛠️ API Installation and usage
```bash
git clone https://github.com/saitama1899/tweettery-api
cd tweettery-api
npm install
node index.js
```

## 📑 Developer Notes

# Developing the API 🗝
- Notes 
# Developing the APP 💻
- Notes

## TODO
- Performance and refactor improvements.
- Improve the request prompt to get better results.
- Add new request to cohere to get reasons to follow that twitter account and show it.
- Follow button.