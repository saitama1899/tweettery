# 🐦 Tweettery

With Tweettery you can get a quick summary of (almost) any Twitter account, for free. You will be able to check what type of content has been doing lately and assess whether to follow him or not.

This is a 1-week project in order to participate at  [midudev-cohere-2023](https://github.com/topics/midudev-cohere-2023) hackathon, with main functionality on [co:here AI](https://cohere.ai/). Expect a lot of space for code, accessiblity and user experience improvements!

- APP: [tweettery.vercel.app](https://tweettery.vercel.app)
- API: [tweettery-api.vercel.app](https://tweettery-api.vercel.app)

![Desktop preview](screen.PNG)

You can acces to the API code here https://github.com/saitama1899/tweettery-api. 

Endpoints:
- POST /api/cohere/summary : It expects a 'username' at body request.

This endpoint receives a username and makes two queries to the Twitter API. One to retrieve the user ID and avatar, and another to retrieve the timeline of this ID. If everything goes well, it transforms the data and combines it with a prompt specifically designed for the Cohere AI to get two values: the first one, an array of values that contains the most prominent topics of this Twitter user. The second one, a brief summary of its content. In case something goes wrong, it returns the exact error.

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

### Developing the API 🗝
- Notes 
### Developing the APP 💻
- Notes

## TODO
- Performance and refactor improvements.
- Improve the request prompt to get better results.
- Add new request to cohere to get reasons to follow that twitter account and show it.
- Follow button.
