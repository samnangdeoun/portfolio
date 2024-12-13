<template>
    <div>
        <div class="flex items-center space-x-2">
            <Switch :checked="darkMode" @update:checked="switchDarkMode" />
        </div>
    </div>
</template>

<script setup>
import { Switch } from '@/components/ui/switch'

const darkMode = ref(false)

const switchDarkMode = () => {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark-mode', darkMode.value)
}
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
