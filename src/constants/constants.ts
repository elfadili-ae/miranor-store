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
        href: '/checkout',
    },
]

export const slides = [
    {
        id: 0,
        title: "New Arrivals - Winter Collection",
        description: "Explore the latest trends! Exclusive discounts up to 40%.",
        img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/",
        bg: "bg-gradient-to-r from-slate-50 to-blue-300",
    },
    {
        id: 1,
        title: "Flash Deal Frenzy",
        description: "Hurry! Get up to 70% off for 24 hours only!"
        ,
        img: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/",
        bg: "bg-slate-300",
    },
    {
        id: 2,
        title: "Exclusive VIP Event",
        description: "Members only! Unlock up to 50% savings today.",
        img: "https://images.unsplash.com/photo-1579171931975-97962e46be2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/",
        bg: "bg-orange-100",
    },
    {
        id: 3,
        title: "Summer Collection Launch",
        description: "Discover our latest trends and get 30% off your first purchase.",
        img: "https://images.unsplash.com/photo-1481016570479-9eab6349fde7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/summer-collection",
        bg: "bg-yellow-200",
    },
];

export const FooterCategories = [
    {
        link: "/products&sort=new",
        name: "New Arriavals",
    },
    {
        link: "/products&cat=women",
        name: "Women",
    },
    {
        link: "/products&cat=men",
        name: "Men",
    },
    {
        link: "/products&cat=accessories",
        name: "Accessories",
    },
    {
        link: "/products",
        name: "All Products",
    },
];

export const FooterCompany = [
    {
        name: "About us",
        link: "/about",
    },
    {
        name: "Careers",
        link: "/careers",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

export const FooterHelp = [
    {
        name: "Customer Support",
        link: "/support",
    },
    {
        name: "Find a store",
        link: "/",
    },
    {
        name: "Coupons",
        link: "/coupons",
    },
]

export const NoFooterNavLinks = [
    '/login',
    '/register',
    '/email-verification',
]