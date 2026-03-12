import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import YAML from "yaml";

// development host for playground proxy
const PLAYGROUND_PROXY_HOST = "http://localhost:8788";

const drafts = ["CG-FINAL", "CR", "ED", "FCGS", "PR", "REC", "WD", "latest"];

export default async function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib
      .set({
        html: true,
        linkify: true,
        typographer: true,
      })
      .use(markdownItAnchor)
      .use(markdownItAttrs);
  });

  eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

  eleventyConfig.addPassthroughCopy("LICENSE.md");
  eleventyConfig.addPassthroughCopy("examples/**/*.{html,ttl,txt,json,jsonld}");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images/**/*.{htaccess,png,svg,xcf}");
  eleventyConfig.addPassthroughCopy({
    "playground/next/editor.bundle.js": "editor.bundle.js",
    "playground/next/editor.mjs": "editor.mjs",
    "playground/playground.css": "playground.css",
  });
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({
    "node_modules/fomantic-ui/dist/semantic.min.css":
      "static/css/fomantic-ui/semantic.min.css",
    "node_modules/fomantic-ui/dist/themes": "static/css/fomantic-ui/themes",
    "node_modules/fomantic-ui/dist/semantic.min.js":
      "static/js/fomantic-ui/semantic.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/jquery/dist/jquery.min.js": "static/js/jquery/jquery.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-italia": "static/bootstrap-italia",
  });

  // ignore default files that are not needed for the build
  eleventyConfig.ignores.add('CONTRIBUTING.md');
  eleventyConfig.ignores.add('LICENSE.md');
  eleventyConfig.ignores.add('README.md');
  eleventyConfig.ignores.add('examples');
  eleventyConfig.ignores.add('images/Makefile');
  eleventyConfig.ignores.add('images/README.md');
  eleventyConfig.ignores.add('presentations');
  eleventyConfig.ignores.add('scripts');
  eleventyConfig.ignores.add('test-suite');
  eleventyConfig.ignores.add('benchmarks');
  eleventyConfig.ignores.add('contexts');
  eleventyConfig.ignores.add('CONTIBUTING');
  eleventyConfig.ignores.add('learn');
  eleventyConfig.ignores.add('LICENSE');
  eleventyConfig.ignores.add('ns');
  eleventyConfig.ignores.add('primer');
  eleventyConfig.ignores.add('requirements');
  eleventyConfig.ignores.add('schemas');
  eleventyConfig.ignores.add('spec');
  eleventyConfig.ignores.add('playground/**');
  eleventyConfig.addWatchTarget("playground/next/index.html");

  // setup development proxy to cloudflare pages function server
  if (process.env.ELEVENTY_RUN_MODE === "serve") {
    eleventyConfig.setServerOptions({
      onRequest: {
        "/playground/proxy": playgroundProxy,
      },
    });
  }

  return {
    dir: {
      layouts: "_layouts",
    },
    pathPrefix: process.env.BASE_URL || "",
  };
}

// proxy to worker proxy
async function playgroundProxy({ url }) {
  const targetUrl = url.searchParams.get("url");
  // eleventy only provides the URL
  // approximate what the live playground does
  const search = new URLSearchParams();
  search.set("url", targetUrl);
  const proxyUrl = new URL(
    `${PLAYGROUND_PROXY_HOST}/playground/proxy?${search}`,
  );
  const res = await fetch(proxyUrl, {
    headers: {
      Accept: "application/ld+json, application/json",
    },
  });
  // create headers object and filter properties
  // suffient for the site development purposes
  const headers = Object.fromEntries(
    Array.from(res.headers.entries()).filter(
      (v) => !["content-length", "content-encoding"].includes(v[0]),
    ),
  );
  return {
    status: res.status,
    headers,
    body: await res.text(),
  };
}
