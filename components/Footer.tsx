import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="about" className="bg-primary 
 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="">
            {/* <h3 className="text-3xl font-display font-bold text-white mb-4">
              StreeDhana
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Smart Mutual Fund For Big Dreams
            </p> */}
            <a href="/" className="flex items-center mb-10">
              <Image
                src="/logo-1.png"      
                alt="StreeDhana Logo"
                width={200}
                height={180}
                className="rounded-lg"
              />
            </a>
            
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
            
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="bg-black border-white/30 text-white hover:scale-105 hover:text-black">
                <img
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-10 w-8 object-contain"
                />
                Android App
              </Button>
              <Button variant="outline" className="bg-black border-white/30 text-white hover:scale-105 hover:text-black">
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="h-10 w-8 object-contain"
                />
                iOS App
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Links</h4>
            <div className="space-y-4">
              
              <Link
                href="/privacy-policy"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <ShieldCheck className="w-5 h-5" />
                Privacy Policy
              </Link>
          
              <Link
                href="/terms-and-conditions"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <FileText className="w-5 h-5" />
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap.xml"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Link2 className="w-5 h-5" />
                Sitemap
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:contact@streedhana.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                contact@streedhana.com
              </a>
              <a href="tel:1800180180" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                Toll Free: 1800 180 180
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Office</h4>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 mt-1 shrink-0" />
              <div>
                <p className="font-medium text-white">NextStep Financials Service Pvt Ltd </p>
                <p className="mt-2">Levana Cyber Heights</p>
                <p>Unit No. 804B, 8th Floor, Vibhuti Khand</p>
                <p>Gomti Nagar, Lucknow</p>
                <p>Uttar Pradesh 226010</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-white/50">
              <p>AMFI Registration Number: ARN-348335</p>
              <p>Validity: 18-DEC-2025 To 17-DEC-2028</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed">
            <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully before investing. Investment in securities market are subject to market risks, read all the related documents carefully before investing. StreeDhana is owned and operated by NextStep Financials Service Private Limited, providing Mutual Fund investing and Financial Literacy with AMFI certification.
            <p>Logos and trademarks displayed are the property of their respective mutual fund companies and are used solely for informational and representation purposes. Their use does not imply any partnership, endorsement, or affiliation unless explicitly stated.</p>
            <p>StreeDhana is owned by NextStep Financials Service Pvt. Ltd., a registered mutual fund distributor with a valid ARN.</p>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © 2026 StreeDhana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
