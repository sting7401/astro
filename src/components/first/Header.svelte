<script lang="ts">
    const { name = 'default' }: { name: string } = $props();

    let count: number = $state(0);

    const countHandler = () => {
        count += 1;
    };
</script>

<header class="text-black">
    {name}
    <nav>
        <li><a href="/">home</a></li>
        <li><a href="/intro">intro</a></li>
        <li><a href="/about">about</a></li>
    </nav>

    <button type="button" onclick={countHandler}>count : {count}</button>
</header>
