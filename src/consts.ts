// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Net Field Notes';
export const SITE_DESCRIPTION =
	'Field notes on enterprise networking — technology, certifications, labs, and real tickets.';
export const SITE_AUTHOR = 'Naveen Alagaraja';

export const TECHNOLOGY = [
	{
		slug: 'network',
		title: 'Network',
		blurb: 'Routing, switching, DNS, WLAN, campus, and DC connectivity.',
		href: '/technology/network',
		tags: ['network', 'wlan'],
	},
	{
		slug: 'security',
		title: 'Security',
		blurb: 'Firewalls, Zero Trust, Prisma, and practical hardening notes.',
		href: '/technology/security',
		tags: ['security'],
	},
	{
		slug: 'automation',
		title: 'Automation',
		blurb: 'Scripts, APIs, CI, and ops workflows that remove toil.',
		href: '/technology/automation',
		tags: ['automation'],
	},
] as const;

export const CERTIFICATIONS = [
	{
		slug: 'cwnp',
		title: 'CWNP',
		blurb: 'CWNA → CWNE path, WLAN study maps, and wireless labs.',
		href: '/certification/cwnp',
		children: [
			{
				slug: 'cwna',
				title: 'CWNA',
				blurb: 'Exam-domain map linked to posts on this site.',
				href: '/certification/cwnp/cwna',
			},
		],
	},
	{
		slug: 'cisco',
		title: 'Cisco',
		blurb: 'Cisco routing, switching, wireless, and exam notes.',
		href: '/certification/cisco',
		children: [],
	},
	{
		slug: 'juniper',
		title: 'Juniper',
		blurb: 'Junos, Mist, SRX/EX notes, and certification study.',
		href: '/certification/juniper',
		children: [],
	},
] as const;

export const RESOURCE_SECTIONS = [
	{
		slug: 'wireless',
		title: 'Wireless',
		blurb: 'WLAN blogs, spectrum charts, and Wi‑Fi design tools.',
		href: '/resources/wireless',
	},
	{
		slug: 'general-networking',
		title: 'General networking',
		blurb: 'Routing, switching, platforms, and day-to-day network utilities.',
		href: '/resources/general-networking',
	},
] as const;

export const REFERENCE_TOOLS = [
	{
		title: 'WiFrizzy',
		blurb: 'Wireless adventures blog — Wi‑Fi engineering musings, troubleshooting, and design lessons.',
		href: 'https://www.wifrizzy.com/',
		category: 'Reading',
		section: 'wireless',
	},
	{
		title: 'WLAN Pros Toolbox',
		blurb: 'Interactive WLAN tools collection from Wireless LAN Professionals.',
		href: 'https://toolbox.wlanpros.com/app/',
		category: 'Tools',
		section: 'wireless',
	},
	{
		title: 'PotatoFi Spectrum Chart',
		blurb: 'Interactive RF spectrum chart for Wi‑Fi, Bluetooth, Zigbee, and more.',
		href: 'https://spectrum.potatofi.com/',
		category: 'Tools',
		section: 'wireless',
	},
	{
		title: 'Channel Charts',
		blurb: 'Channel charts for 2.4, 5, and 6 GHz bands.',
		href: 'https://nickjvturner.com/channel-charts',
		category: 'Tools',
		section: 'wireless',
	},
	{
		title: 'Juniper Port Checker',
		blurb: 'Look up Juniper platform port capabilities and configurations.',
		href: 'https://apps.juniper.net/port-checker/',
		category: 'Tools',
		section: 'general-networking',
	},
	{
		title: 'Wireless Talks',
		blurb: 'Talks from WLPC and Wi-Fi Design Day.',
		href: 'https://wlan-talks.net',
		category: 'Reading',
		section: 'wireless',
	},
] as const;

/** @deprecated use TECHNOLOGY — kept for older imports during transition */
export const TOPICS = TECHNOLOGY;
