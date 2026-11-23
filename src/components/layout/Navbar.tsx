'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                <Zap className="relative w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Gen</span>
                <span className="gradient-text">Quantaa</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                'children' in link ? (
                  <div key={link.label} className="relative group">
                    <button
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        'text-slate-300 hover:text-white hover:bg-white/5'
                      )}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={cn(
                        'absolute top-full left-0 mt-1 w-56 py-2 glass rounded-xl shadow-xl shadow-black/40',
                        'transition-all duration-200 origin-top',
                        openDropdown === link.label
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mr-2.5 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-outline text-sm py-2 px-4">
                Book a Demo
              </Link>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-full max-w-sm bg-[#0a1628] border-l border-cyan-500/10',
            'flex flex-col transition-transform duration-300 ease-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-5 border-b border-cyan-500/10">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white">
                Gen<span className="gradient-text">Quantaa</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex-1 overflow-y-auto py-4 px-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="mb-1">
                {'children' in link ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-cyan-500/20 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 text-sm text-slate-400 hover:text-cyan-400 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-medium transition-colors',
                      pathname === link.href
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="p-5 border-t border-cyan-500/10 space-y-3">
            <Link href="/contact" className="btn-outline w-full justify-center text-sm">
              Book a Demo
            </Link>
            <Link href="/contact" className="btn-primary w-full justify-center text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
