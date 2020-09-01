import xr from "xr";
import blocksTemplate from "../templates/blocks.html";
import Mustache from "mustache";

var el = document.createElement("script");
el.src = "<%= path %>/app.js";
document.body.appendChild(el);

xr.get(
  "https://interactive.guim.co.uk/docsdata-test/1D5AqIM0mJn-7rYtbKjV7McltGI2Z8VZZ0yATACN8L08.json"
).then((resp) => {
  var sheets = resp.data.sheets;
  var html = Mustache.render(blocksTemplate, sheets);

  return html;
});
