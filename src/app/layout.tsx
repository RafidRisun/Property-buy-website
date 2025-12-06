import type { Metadata } from 'next';
import { Alexandria } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const generalSans = localFont({
	src: [
		{
			path: './fonts/GeneralSans-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/GeneralSans-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/GeneralSans-Semibold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/GeneralSans-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-general-sans',
	display: 'swap',
});

const alexandria = Alexandria({
	variable: '--font-alexandria',
	subsets: ['latin'],
});

const clashBold = localFont({
	src: './fonts/ClashDisplay-Bold.otf',
	variable: '--font-clash-bold',
	display: 'swap',
});

const silka = localFont({
	src: './fonts/silka-regular-webfont.ttf',
	variable: '--font-silka',
	display: 'swap',
});

const blauerSemiBold = localFont({
	src: './fonts/Blauer-Nue-Semibold.otf',
	variable: '--font-blauer-semibold',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'WiztecBD-task',
	description: 'Please hire me please please',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${generalSans.variable} ${alexandria.variable} ${clashBold.variable} ${silka.variable} ${blauerSemiBold.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
