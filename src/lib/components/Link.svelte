<script>
	let { children, rel = '', target = '', href, arialabel } = $props();
</script>

<a aria-label={arialabel} {href} {rel} {target}> {@render children?.()}</a>
