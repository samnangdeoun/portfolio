<template>
    <header class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg">
        <div class="container max-w-screen-2xl flex h-14 items-center justify-between gap-2 px-4 md:px-8">
            <div class="hidden flex-1 md:flex">
                <a href="/" class="router-link-active router-link-exact-active flex items-center">
                    <span class="ml-3 self-center font-bold">shadcn-docs</span>
                </a>
            </div>
            <nav class="relative z-10 max-w-max items-center justify-center hidden flex-1 lg:flex">
                <div class="relative">
                    <ul class="group flex flex-1 list-none items-center justify-center gap-x-1">
                        <li s>
                            <button
                                class="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                Docs
                                <span
                                    class="iconify i-lucide:chevron-down relative top-px ml-1 block size-3 transition duration-200 group-data-[state=open]:rotate-180"
                                    aria-hidden="true"></span>
                            </button>
                        </li>
                        <li>
                            <button
                                class="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                Credits
                                <span
                                    class="iconify i-lucide:chevron-down relative top-px ml-1 block size-3 transition duration-200 group-data-[state=open]:rotate-180"
                                    aria-hidden="true"></span>
                            </button>
                        </li>
                        <li>
                            <a href="/getting-started/installation"
                                class="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                Use This Template
                                <span
                                    class="iconify i-lucide:arrow-up-right absolute right-2 top-2 text-muted-foreground"
                                    aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="flex flex-1 items-center justify-end gap-2">
                <button
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10">
                    <span class="iconify i-lucide:paintbrush" aria-hidden="true"></span>
                </button>

                <DarkMode />
                <a href="https://github.com/ZTL-UwU/shadcn-docs-nuxt" rel="noopener noreferrer" target="_blank">
                    <button
                        class="items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 flex gap-2">
                        <span class="iconify i-lucide:github" aria-hidden="true"></span>
                    </button>
                </a>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const localeDropdown = ref(false)
const isSticky = ref(false)
const activeTab = ref("ABOUT")

// const switchLanguage = (locale) => {
//     this.$i18n.locale = locale
// }

const localeToggler = () => {
    localeDropdown.value = !localeDropdown.value
}

const toTheSection = (scroll, tabName) => {
    activeTab.value = tabName
    window.scrollTo({ top: scroll, block: "center", behavior: "smooth" })
    document.documentElement.scrollIntoView = scroll
}

const handleScroll = () => {
    if (window.scrollY > 0) {
        isSticky.value = true
    } else {
        isSticky.value = false
    }
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>
