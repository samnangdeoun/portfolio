<template>
    <header class="sticky top-0 z-40 bg-background/80 shadow-lg dark:bg-[#091a28]/90 backdrop-blur-lg">
        <div class="container max-w-screen-2xl flex h-20 items-center justify-between gap-2 px-4 md:px-8">
            <div class="hidden flex-1 lg:flex">
                <RouterLink to="/" class="RouterLink-active RouterLink-exact-active flex items-center">
                    <span class="ml-3 self-center font-bold uppercase font-noto_sans dark:text-white text-xl">{{
                        $t('deoun_samnang') }}</span>
                </RouterLink>
            </div>
            <nav class="relative z-10 max-w-max items-center justify-center hidden lg:flex">
                <div class="relative">
                    <ul class="group text-center flex flex-1 list-none items-center justify-center gap-x-5">
                        <li>
                            <RouterLink :to="'/about'"
                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                {{ $t('about_me') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="'/projects'"
                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                {{ $t('projects') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="'/blog'"
                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                {{ $t('blog') }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="flex lg:hidden">
                <Sheet>
                    <SheetTrigger
                        class="bg-transparent transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent side="left" class="w-3/4 dark:bg-[#091a28]/90">
                        <SheetHeader>
                            <SheetTitle class="text-xl font-noto_sans">{{ $t('deoun_samnang') }}</SheetTitle>
                            <nav class="relative z-10 max-w-max items-center justify-center lg:flex">
                                <div class="relative">
                                    <ul class="group text-start flex flex-1 flex-col list-none justify-start">
                                        <li>
                                            <RouterLink :to="'/about'"
                                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                                {{ $t('about_me') }}
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink :to="'/projects'"
                                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                                {{ $t('projects') }}
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink :to="'/blog'"
                                                class="group uppercase font-bold font-noto_sans text-lg inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none">
                                                {{ $t('blog') }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div class="flex flex-1 items-center justify-end gap-2">
                <div class=" ">
                    <SwitchLanguage />
                </div>
                <DarkMode />
            </div>
        </div>

    </header>
</template>
<script setup>
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

</script>
