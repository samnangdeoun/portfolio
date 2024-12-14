<template>
    <header class="sticky top-0 z-40 bg-background/80 dark:bg-[#091a28]/80 backdrop-blur-lg">
        <div class="container max-w-screen-2xl flex h-20 items-center justify-between gap-2 px-4 md:px-8">
            <div class="hidden flex-1 md:flex">
                <button class="router-link-active router-link-exact-active flex items-center">
                    <span class="ml-3 self-center font-bold dark:text-white text-xl">DEOUN SAMNANG</span>
                </button>
            </div>
            <nav class="relative z-10 max-w-max items-center justify-center hidden flex-1 lg:flex">
                <div class="relative">
                    <ul class="group text-center flex flex-1 list-none items-center justify-center gap-x-1">
                        <li>
                            <button
                                class="group font-noto_sans  inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                {{ $t('about_me') }}
                                <span
                                    class="text-center iconify i-lucide:chevron-down relative top-px ml-1 block size-3 transition duration-200 group-data-[state=open]:rotate-180"
                                    aria-hidden="true"></span>
                            </button>
                        </li>
                        <li>
                            <button
                                class="group inline-flex font-noto_sans h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                {{ $t('projects') }}
                                <span
                                    class="iconify i-lucide:chevron-down relative top-px ml-1 block size-3 transition duration-200 group-data-[state=open]:rotate-180"
                                    aria-hidden="true"></span>
                            </button>
                        </li>
                        <li>
                            <button
                                class="group inline-flex font-noto_sans h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                {{ $t('blog') }}
                                <span
                                    class="iconify i-lucide:arrow-up-right absolute right-2 top-2 text-muted-foreground"
                                    aria-hidden="true"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="flex flex-1 items-center justify-end gap-2">
                <SwitchLanguage />
                <DarkMode />
            </div>
        </div>
    </header>
</template>
<script setup>

</script>
