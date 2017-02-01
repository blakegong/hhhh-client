# g slash client
g slash (g/) client written for team hhhh during Garena Hackathon 2016 using React/Redux/Redux-saga

## What is g slash
g slash is an internal network search engine, also a customizable URL shortener that comes with all common services predefined as well.

g slash is hosted at [https://g/](https://g/) (only through Garena internal network). This short URL works by taking advantage of company computer's preset [search domains](https://ubuntuforums.org/showthread.php?t=1568001).

It runs a crawler in the internal network, and ultilises Elasticsearch to serve crawled data.

It also helps to add your most visited services to [https://g/{service}](https://g/{service_name}). So that less time is spent opening your favorite, non Google searchable contents.

## How to run
The project is created with [create-react-app](https://github.com/facebookincubator/create-react-app). Current `react-scripts` version is 0.7.0. So just run:

```
npm install
npm start
```

## Structure
```
├── public
└── src
    ├── actions              # Redux actions
    ├── commons
    │   └── api.js           # API wrapper
    ├── components           # Presentational Components
    ├── containers           # Container components
    ├── images
    ├── reducers             # Redux reducers
    ├── sagas                # Generator functions for Redux-Saga
    └── utils
        └── hoc-lifecycle.js # High-Order Component (HOC) for React Component lifecycle hooks
```
