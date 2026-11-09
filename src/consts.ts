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

/** @deprecated use TECHNOLOGY — kept for older imports during transition */
export const TOPICS = TECHNOLOGY;
