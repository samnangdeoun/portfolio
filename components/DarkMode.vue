<template>
    <div class="flex items-center">
        <span class="mr-2 text-sm">{{ theme === 'dark' ? 'Light' : 'Dark' }} Mode</span>
        <Switch :checked="theme === 'dark' ? true : false" @update:checked="switchTheme" />
    </div>
</template>


<script setup>
import { useTheme } from '@/composables/useTheme';

const { theme, setTheme } = useTheme();

const switchTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
};
</script>
