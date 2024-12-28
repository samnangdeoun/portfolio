<template>
    <div>
        <PageTitle title="about_me" />
        <div class="px-[2rem] font-noto_sans">
            <p class="font-2xl mb-[1rem]" v-for="(paragraph, index) in paragraphs" :key="index">
                {{ locale === 'kh' ? paragraph.about_me_kh : paragraph.about_me }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const paragraphs = ref([
    {
        about_me: "I am a software engineer",
        about_me_kh: "ខ្ញុំជាអ្នកអ្នកអប់ស",
    },
])
</script>