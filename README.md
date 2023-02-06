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

## 📑 Developer Notes

#### Developing the API
- With Cohere API, I found it hard to find a prompt that met the app's objective to a notable level. The idea was to train the AI with 2 examples of inputs and outputs and obtain a summary of the content divided into three parts: A top 10 of the topics it covers, a brief summary, and a reason why it would be good to follow that Twitter account. Right now, I've managed to get the first two fields with some reliability and an acceptable result, but it was impossible to receive the third one at least in the same request and with the free plan. In a To-do, there's a second request to obtain that third field, but I consider the waiting time already too high.

- With the Twitter API, I was forced to make 2 requests, as you can't get a timeline just with the username, you need the Id.

#### Developing the APP
- I have used framer motion in the animations to test this library. For the moment, I think its use can be good for saving lines of code, both in keyframes and in states and JavaScript logic, but it has a learning curve and also the package is too heavy. In the To-do, I'm trying to use the lazy loading offered by the library to save load.

- The cohere API is very slow and I was thinking of original designs to distract the user's attention. The design consists of a sky whose elements float. For the topics, I had thought of floating balloons but I haven't had time.
Speaking of design, I included a dark mode with a night sky.

## 🗝 API Built with
- [Express](https://expressjs.com/es/) For make the API.
- [Co:here AI](https://cohere.ai/) For get summary data given a raw Twitter account timeline.
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api) For get the user id, avatar, and the timeline given a username.

## 💻 APP Built with
- [Vite](https://vitejs.dev/) For build the project.
- [ReactJs](https://es.reactjs.org/) For User UI.
- [Framer Motion](https://www.framer.com/motion/) For frontend animations.
- [Tailwind](https://tailwindcss.com) For frontend styles.

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

## TODO
- Improve performance and component refactor.
- Improve the cohere request prompt to get better results.
- Add new request to cohere to get reasons to follow that twitter account and show it.
- Add Follow button.
