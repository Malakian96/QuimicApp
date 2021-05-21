const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(`${__dirname}/build`));

app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true,
}));
app.use(staticFileMiddleware);

app.get('/', (req, res) => {
    res.render(path.join(`${__dirname}/dist/index.html`));
});

var server = app.listen(process.env.PORT || 8080, () => {
    const { port } = server.address();
    console.log('App now running on port', port);
});