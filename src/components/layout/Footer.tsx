'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "logoText",
 *   "text-1": "companyDescription",
 *   "text-2": "contactEmail",
 *   "text-3": "contactPhone",
 *   "text-4": "contactAddress",
 *   "text-5": "newsletterTitle",
 *   "text-6": "newsletterDisclaimer",
 *   "text-7": "section1Title",
 *   "text-8": "section2Title",
 *   "text-9": "section3Title",
 *   "text-10": "section4Title",
 *   "text-11": "copyrightText",
 *   "text-12": "madeWithText",
 *   "text-13": "socialText",
 *   "link-0": "social1Href",
 *   "link-1": "social2Href",
 *   "link-2": "social3Href",
 *   "link-3": "social4Href",
 *   "link-4": "social5Href"
 * }
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

interface FooterProps {
  logoText?: string;
  companyDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  newsletterTitle?: string;
  newsletterDisclaimer?: string;
  section1Title?: string;
  section2Title?: string;
  section3Title?: string;
  section4Title?: string;
  copyrightText?: string;
  madeWithText?: string;
  socialText?: string;
  social1Href?: string;
  social2Href?: string;
  social3Href?: string;
  social4Href?: string;
  social5Href?: string;
}

export default function Footer({
  logoText = 'Example Tech',
  companyDescription = 'Empowering businesses with cutting-edge technology solutions. From cloud infrastructure to AI-powered analytics, we help companies scale and innovate in the digital age.',
  contactEmail = 'hello@exampletech.com',
  contactPhone = '+1 (555) 847-2900',
  contactAddress = '2847 Innovation Drive, Tech Hub 200',
  newsletterTitle = 'Tech Insights Weekly',
  newsletterDisclaimer = 'Get the latest tech trends, product updates, and industry insights. Unsubscribe anytime.',
  section1Title = 'Solutions',
  section2Title = 'Company',
  section3Title = 'Resources',
  section4Title = 'Legal',
  copyrightText = '© 2024 Example Tech. All rights reserved.',
  madeWithText = 'by our engineering team',
  socialText = 'Connect with us:',
  social1Href = 'https://twitter.com/exampletech',
  social2Href = 'https://facebook.com/exampletech',
  social3Href = 'https://instagram.com/exampletech',
  social4Href = 'https://linkedin.com/company/exampletech',
  social5Href = 'https://github.com/exampletech',
}: FooterProps) {
  const footerSections = [
    {
      title: section1Title,
      links: [
        { name: 'Cloud Platform', href: '/cloud' },
        { name: 'AI & Analytics', href: '/ai-analytics' },
        { name: 'DevOps Tools', href: '/devops' },
        { name: 'Security Suite', href: '/security' },
        { name: 'API Gateway', href: '/api' },
        { name: 'Enterprise', href: '/enterprise' },
      ],
    },
    {
      title: section2Title,
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Engineering Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Technology Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: section3Title,
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Developer Community', href: '/community' },
        { name: 'Code Examples', href: '/examples' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: section4Title,
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Data Processing', href: '/data-processing' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security Policy', href: '/security-policy' },
        { name: 'SLA', href: '/sla' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: social1Href },
    { name: 'Facebook', icon: Facebook, href: social2Href },
    { name: 'Instagram', icon: Instagram, href: social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: social4Href },
    { name: 'GitHub', icon: Github, href: social5Href },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{logoText.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl" data-editable-id="text-0">
                  {logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable-id="text-1">{companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-2">
                  {contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-3">
                  {contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-4">
                  {contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable-id="text-5">
                {newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable-id="text-6">{newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => {
              const titleId = `text-${7 + index}`;
              return (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold text-sm" data-editable-id={titleId}>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable-id="text-11">{copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable-id="text-12">{madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable-id="text-13">
                {socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const linkId = `link-${index}`;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    data-editable-href={linkId}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
