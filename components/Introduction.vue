<template>
    <div class="flex justify-around items-center mx-5">
        <div class=" sm:max-w-xl md:max-w-full dark:text-white lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
                <h2
                    class="text-start mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
                    <span class="relative inline-block">
                        <p class="text-start relative text-7xl dark:text-gray-100 font-noto_sans"
                            :class="locale == 'kh' ? 'mt-10 text-8xl' : ''">{{ $t('deoun_samnang') }}</p>
                    </span>
                </h2>
                <p class="font-bold font-noto_sans text-gray-700 md:text-lg dark:text-gray-300">
                    I am a Software Developer with a passion for delivering exceptional results.
                    With my expertise in Vuejs and Nuxtjs on the frontend, and Nodejs on the backend, I bring a unique combination of technical skills and creative problem-solving to every
                    project I work on.
                </p>
            </div>

        </div>
        <div>
            <div class="w-full">
                <img src="../assets/images/webTechnology.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from '#imports'

const { locale } = useI18n()
console.log(locale.value)
</script>