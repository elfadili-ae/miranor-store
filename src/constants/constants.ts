import { MenuLinksType } from "@/types";


export const MenuLinks: MenuLinksType = [
    {
        isNavLink: false,
        name: 'Home',
        href: '/',
    },
    {
        isNavLink: true,
        name: 'Shop',
        href: '/products',
    },
    {
        isNavLink: true,
        name: 'Deals',
        href: '/deals',
    },
    {
        isNavLink: true,
        name: 'About',
        href: '/about',
    },
    {
        isNavLink: true,
        name: 'Contact',
        href: '/contact',
    },
    {
        isNavLink: false,
        name: 'Cart',
        href: '/cart',
    },
    {
        isNavLink: false,
        name: 'Logout',
        href: '/logout',
    },
]