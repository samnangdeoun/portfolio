<template>
    <div>
        <div class="flex items-center justify-start p-[2rem]">
            <h1 class="text-2xl font-bold uppercase font-noto_sans">{{ $t(props.title) }}</h1>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    title: String,
});
</script>