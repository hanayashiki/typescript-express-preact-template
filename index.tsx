import express from "express";
import { h } from "preact";
import { render } from 'preact-render-to-string';
import { BaseHtml, SearchBox } from "./render";

const app = express();
const port = 4545;

app.get('/', async (req, res) => {
  return res.send(render(
    <BaseHtml>
      <SearchBox />
    </BaseHtml>
  ))
});

app.listen(port, () => {
  console.info(`web started at http://localhost:${port}`)
});