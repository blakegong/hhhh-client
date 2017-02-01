# g slash client
g slash (g/) client written for team hhhh during Garena Hackathon 2016 using React/Redux/Redux-saga

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
