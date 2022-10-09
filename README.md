# How can I get the window object in an .mdx file?

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)


- ✅ Test.svelte persists a Svelte store to local storage using the window object.
- ✅ I can import & use Test.svelte in an .astro file with the <a href="https://docs.astro.build/en/reference/directives-reference/#clientonly" target="_blank" rel="noopener noreferrer">client:only</a> directive, <a href="https://docs.astro.build/en/guides/troubleshooting/#common-cause" target="_blank" rel="noopener noreferrer">as per the docs</a>. See <a href="/good-to-go">here</a>.

```
  import Test from "../components/Test.svelte";

  <Test client:only />
```

- ✅ But when I run the same code in an .mdx file, I get the <mark>"Window is not defined"</mark> error. See <a href="/no-go">here</a>.

[!["window is not defined"](./public/window-is-not-defined.png)

- ✅ (Svelte components that don't depend on _window_ run as expected in .mdx.)