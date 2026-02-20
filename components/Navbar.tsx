"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toolItems = [
    { label: "Free AI Investment Calculators", href: "/aitools" },
  ];


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 transition-transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/finallogo.png"
                alt="StreeDhana Logo"
                width={160}
                height={130}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">

              <Link
                href="/products"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                Products
              </Link>

              <Link
                href="/ginnie"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                MF Sakhi/Ginnie
              </Link>

              {/* Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium group focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg px-3 py-2 cursor-pointer">
                  Tools 
                  <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  sideOffset={8}
                  className="w-72 rounded-xl border border-gray-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200 z-50"
                >
                  {toolItems.map((item) => (
                    <DropdownMenuItem key={item.label} asChild className="focus:bg-primary/10 focus:text-primary rounded-lg cursor-pointer">
                      <Link 
                        href={item.href} 
                        className="w-full py-3 px-4 hover:bg-primary/5 transition-colors duration-150"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{item.label}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/#faq"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                About Us
              </Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
  
              {/* Distributor Login */}
              <Button
                variant="outline"
                className="!border-primary !text-primary 
                           hover:!bg-primary hover:!text-white 
                           transition-all duration-300 
                           hover:scale-105 active:scale-95"
              >
                Distributor Login
              </Button>
            
              {/* Customer Login */}
              <Button
                className="!bg-primary !text-white 
                           hover:!bg-primary hover:!text-primary 
                           transition-all duration-300 
                           hover:scale-105 active:scale-95 
                           shadow-md hover:shadow-lg"
              >
                Customer Login
              </Button>
            
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu - Content */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden fixed top-16 md:top-20 left-0 right-0 bg-white shadow-xl z-40 transition-all duration-300 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="px-2 py-3 text-gray-700 hover:text-primary transition-colors duration-150 font-medium rounded-lg hover:bg-primary/5"
              >
                Products
              </Link>

              <Link
                href="/ginnie"
                onClick={() => setIsOpen(false)}
                className="px-2 py-3 text-gray-700 hover:text-primary transition-colors duration-150 font-medium rounded-lg hover:bg-primary/5"
              >
                MF Sakhi/Ginnie
              </Link>

              {/* Tools Accordion */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-2 py-3 text-gray-700 font-medium">
                  <span>Tools</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                  {toolItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-150"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="px-2 py-3 text-gray-700 hover:text-primary transition-colors duration-150 font-medium rounded-lg hover:bg-primary/5"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="px-2 py-3 text-gray-700 hover:text-primary transition-colors duration-150 font-medium rounded-lg hover:bg-primary/5"
              >
                About Us
              </Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Distributor Login
                </Button>
                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Customer Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;