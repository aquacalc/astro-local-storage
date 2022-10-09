# How can I get the window object in an .mdx file?

```
import Test from "../components/Test.svelte";

<Test client:only />

```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)

Features:

- ✅ Test.svelte persists a Svelte store to local storage using the window object.
- ✅ 100/100 Lighthouse performance


	<p>
		* I can import & use Test.svelte in an .astro file with the <a
      href="https://docs.astro.build/en/reference/directives-reference/#clientonly"
      target="_blank"
      rel="noopener noreferrer">client:only</a
    > directive, <a
		href="https://docs.astro.build/en/guides/troubleshooting/#common-cause"
		target="_blank"
		rel="noopener noreferrer">as per the docs</a
	>. See <a href="/good-to-go">here</a>.
  </p>

	<p>
		* But when I run the same code in an .mdx file, I get the <mark>"Window is not defined"</mark> error. See <a href="/no-go">here</a>.
	</p>
	
	<p>
		(Svelte components that don't depend on window run as expected in .mdx.)
	</p>
  The same import that works in the .astro file

<div style='text-align: center; font-size: 1.25rem;'>
<pre style="padding: 0;">import Test from "../components/Test.svelte";</pre>
</div>

throws <mark>"Window is not defined" in this .mdx file</mark> (/pages/no-go.mdx).

![yadda](/window-is-not-defined.png)
