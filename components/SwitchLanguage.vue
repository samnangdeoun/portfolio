<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">
                {{ locale === 'en' ? 'English' : 'Khmer' }}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-20">
            <DropdownMenuGroup>
                <DropdownMenuItem @click="locale = 'en'">
                    <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="locale = 'kh'">
                    <span>Khmer</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>

        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useI18n } from '#imports'

const { locale } = useI18n()

console.log(locale.value, 'locale');
</script>
