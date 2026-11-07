// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Net Field Notes';
export const SITE_DESCRIPTION =
	'Field notes on enterprise networking — WLAN, routing, security, and the labs behind real tickets.';
export const SITE_AUTHOR = 'Naveen Alagaraja';

export const TOPICS = [
	{
		slug: 'wlan',
		title: 'WLAN',
		blurb: 'RF, 802.11, design, and the CWNA → CWNE study path.',
		href: '/wlan',
	},
	{
		slug: 'network',
		title: 'Network',
		blurb: 'Routing, switching, DNS, DC fabric, and campus connectivity.',
		href: '/blog',
	},
	{
		slug: 'security',
		title: 'Security',
		blurb: 'Firewalls, Zero Trust, Prisma, and practical hardening notes.',
		href: '/blog',
	},
	{
		slug: 'labs',
		title: 'Labs',
		blurb: 'Packet captures, configs, and short write-ups from real issues.',
		href: '/blog',
	},
] as const;
