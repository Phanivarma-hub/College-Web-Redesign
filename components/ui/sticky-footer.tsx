"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
    MapPin,
    Mail,
    Phone,
    Globe
} from 'lucide-react';
import { Button } from './button';

// Brand SVGs since this version of lucide-react doesn't export them
const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
	label: string;
	links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
	return (
		<footer
			className={cn('relative h-full w-full bg-black text-white', className)}
			{...props}
		>
			<div className="relative h-full w-full bg-black">
				<div className="h-full pt-20">
					<div className="relative flex size-full flex-col justify-between gap-10 border-t border-white/10 px-4 py-12 md:px-12">
						{/* Background Accents */}
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 overflow-hidden pointer-events-none"
						>
							<div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px]" />
							<div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
						</div>

						{/* Top Section: Campuses */}
						<div className="z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
							{campusGroups.map((group, index) => (
								<AnimatedContainer
									key={group.label}
									delay={index * 0.1}
									className="flex flex-col space-y-4"
								>
									<div className="flex items-center gap-2">
										<div className="h-8 w-1 bg-gradient-to-b from-green-500 to-transparent" />
										<h3 className="text-sm font-bold tracking-widest text-green-400 uppercase">
											{group.label}
										</h3>
									</div>
									<ul className="space-y-3">
										{group.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="text-white/60 hover:text-white transition-colors text-sm leading-relaxed"
												>
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</AnimatedContainer>
							))}
						</div>

						{/* Middle Section: Logo, Contact, Links */}
						<div className="z-10 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
							{/* Logo and About */}
							<AnimatedContainer className="flex flex-col space-y-6">
								<div className="flex flex-col">
									<div className="flex items-center gap-3">
                                        <div className="p-1 bg-white rounded-lg">
                                            <img 
                                                src="https://seethapoly.edu.in/wp-content/uploads/2020/01/footerlogo1-300x300.png" 
                                                alt="SBSP Logo" 
                                                className="size-16 object-contain"
                                            />
                                        </div>
									    <span className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase">
										    Universal<br/>Learning
									    </span>
                                    </div>
								</div>
								<p className="text-sm text-white/50 leading-relaxed max-w-sm">
									Smt. B. Seetha Polytechnic College is committed to providing 
									world-class technical education, fostering innovation, and 
                                    empowering students under the Vishnu Educational Society.
								</p>
								<div className="flex gap-3">
									{socialLinks.map((link) => (
										<Button 
                                            key={link.title}
                                            size="icon" 
                                            variant="outline" 
                                            className="size-10 rounded-full border-white/10 bg-white/5 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                                            asChild
                                        >
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">
											    <link.icon className="size-5" />
                                            </a>
										</Button>
									))}
								</div>
							</AnimatedContainer>

							{/* Contact Info */}
							<AnimatedContainer delay={0.2} className="flex flex-col space-y-6">
								<h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact Us</h3>
								<div className="flex flex-col space-y-4">
									<div className="flex items-start gap-4">
										<MapPin className="size-5 text-green-500 shrink-0 mt-1" />
										<p className="text-sm text-white/60">
											Vishnupur, West Godavari, Bhimavaram,<br />
											Andhra Pradesh 534202
										</p>
									</div>
									<div className="flex items-center gap-4">
										<Mail className="size-5 text-purple-500 shrink-0" />
										<a href="mailto:seethapolytechnic093@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
											seethapolytechnic093@gmail.com
										</a>
									</div>
									<div className="flex items-center gap-4">
										<Phone className="size-5 text-green-500 shrink-0" />
										<a href="tel:+918816250815" className="text-sm text-white/60 hover:text-white transition-colors">
											+91 88162 50815
										</a>
									</div>
								</div>
							</AnimatedContainer>

							{/* Quick Links */}
							<AnimatedContainer delay={0.3} className="flex flex-col space-y-6">
								<h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
								<ul className="grid grid-cols-2 gap-x-4 gap-y-3">
									{quickLinks.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="text-sm text-white/60 hover:text-green-500 transition-colors flex items-center gap-2 group"
											>
												<span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-3" />
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</AnimatedContainer>
						</div>

						{/* Bottom Copyright */}
						<div className="z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 pb-4 text-xs font-medium uppercase tracking-widest text-white/30 md:flex-row">
							<p>© 2025 Smt. B. Seetha Polytechnic College. All rights reserved.</p>
							<div className="flex items-center gap-8">
								<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
								<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
								<p>Vishnu Educational Society</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{ title: 'Facebook', href: 'https://www.facebook.com/sbsbhvrm/', icon: FacebookIcon },
	{ title: 'Twitter', href: '#', icon: Globe }, 
	{ title: 'Instagram', href: 'https://www.instagram.com/sbs_polytechnic/', icon: InstagramIcon },
	{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

const campusGroups: FooterLinkGroup[] = [
	{
		label: 'Green Meadows Campus',
		links: [
			{ title: 'Shri Vishnu Engineering College for Women', href: '#' },
			{ title: 'Vishnu Institute of Technology', href: '#' },
			{ title: 'Smt. B Seetha Polytechnic College', href: '#' },
			{ title: 'Vishnu Dental College & Hospital', href: '#' },
			{ title: 'Shri Vishnu College of Pharmacy', href: '#' },
			{ title: 'B.V.Raju Institute of Computer Education', href: '#' },
			{ title: 'Vishnu School, Bhimavaram', href: '#' },
		],
	},
	{
		label: 'Orchard Park Campus',
		links: [
			{ title: 'Padmasri Dr. B V Raju Institute of Technology', href: '#' },
			{ title: 'Vishnu Institute of Pharmaceutical Education and Research', href: '#' },
			{ title: 'Vishnu Public School, Narsapur', href: '#' },
		],
	},
	{
		label: 'Valley Vista Campus',
		links: [
			{ title: 'BVRIT Hyderabad College of Engineering For Women', href: '#' },
		],
	},
	{
		label: 'Lake View Campus',
		links: [
			{ title: 'Vishnu Educational Development and Innovation Centre', href: '#' },
		],
	},
];

const quickLinks = [
	{ title: 'About College', href: '#' },
	{ title: 'Vishnu ERA', href: '#' },
	{ title: 'Student Portal', href: '#' },
	{ title: 'Curriculum', href: '#' },
	{ title: 'AICTE', href: '#' },
	{ title: 'Committees', href: '#' },
	{ title: 'Policies', href: '#' },
    { title: 'NIRF', href: '#' },
    { title: 'Mandatory Disclosure', href: '#' },
    { title: 'Contact', href: '#' },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ translateY: 20, opacity: 0 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
