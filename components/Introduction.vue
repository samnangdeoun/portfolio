<template>
    <div class="flex justify-around items-center p-[1rem] gap-[1rem]">
        <div class="w-1/4">
            <Sidebar />
        </div>
        <div
            class="overflow-y-scroll border w-3/4 bg-white dark:bg-[#091a28] dark:text-white shadow-lg rounded-2xl h-[calc(100vh-7rem)]">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
</script>