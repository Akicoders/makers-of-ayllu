<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { onBeforeMount, ref, watch } from 'vue';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
const page = usePage();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

const isActiveMenu = ref(false);
const itemKey = ref(null);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

    const activeItem = themeStore.activeMenuItem;
    isActiveMenu.value =
        activeItem === itemKey.value || (activeItem ? activeItem.startsWith(itemKey.value + '-') : false);
});

watch(
    () => themeStore.activeMenuItem,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);

function itemClick(event, item) {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    if ((item.to || item.url) && (themeStore.staticMenuMobileActive || themeStore.overlayMenuActive)) {
        themeStore.toggleMenu();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;
    themeStore.setActiveMenuItem(foundItemKey);
}

function checkActiveRoute(item) {
    return page.url === item.to || window.location.pathname === item.to;
}
</script>

<template>
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text text-brand-navy dark:text-brand-gold-light text-xs font-bold tracking-wider">
            {{ item.label }}
        </div>

        <a v-if="(!item.to || item.items) && item.visible !== false" 
           :href="item.url"
           @click="itemClick($event, item, index)" 
           :class="[item.class, 'group hover:bg-brand-cream dark:hover:bg-brand-navy/30']" 
           :target="item.target" 
           tabindex="0">
            <i :class="[item.icon, 'layout-menuitem-icon text-brand-gold group-hover:text-brand-gold-dark transition-colors']"></i>
            <span class="layout-menuitem-text text-brand-navy-deep dark:text-surface-100">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler text-brand-gold" v-if="item.items"></i>
        </a>

        <Link v-if="item.to && !item.items && item.visible !== false" 
              @click="itemClick($event, item, index)"
              :class="[
                  item.class, 
                  'group hover:bg-brand-cream dark:hover:bg-brand-navy/30 transition-all duration-200',
                  { 'active-route bg-brand-gold/10 dark:bg-brand-gold/20 border-l-4 border-brand-gold font-semibold': checkActiveRoute(item) }
              ]" 
              tabindex="0" 
              :href="item.to">
            <i :class="[
                item.icon, 
                'layout-menuitem-icon transition-colors',
                checkActiveRoute(item) ? 'text-brand-gold' : 'text-brand-gold/70 group-hover:text-brand-gold'
            ]"></i>
            <span :class="[
                'layout-menuitem-text transition-colors',
                checkActiveRoute(item) ? 'text-brand-gold' : 'text-brand-navy-deep dark:text-surface-100'
            ]">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler text-brand-gold" v-if="item.items"></i>
        </Link>

        <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
            <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
                <app-menu-item v-for="(child, i) in item.items" :key="child" :index="i" :item="child"
                    :parentItemKey="itemKey" :root="false" />
            </ul>
        </Transition>
    </li>
</template>