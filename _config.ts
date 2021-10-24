import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
    location: new URL("https://www.sofianos.dev"),
    dev: false,
    prettyUrls: true,
    server: {
        port: 3000,
        page404: "/404.html",
        open: false,
    }
});
site.copy("static", "static");
site.loadAssets([".css"]);

site.use(jsx());

export default site;
