"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Stethoscope, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <motion.div
          className="grid gap-8 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Stethoscope className="h-8 w-8 text-blue-400" />
                </motion.div>
                <span className="text-xl font-bold">MedTech Solutions</span>
              </Link>
            </motion.div>
            <p className="text-slate-300 leading-relaxed">
              Leading provider of advanced biomedical equipment, empowering healthcare professionals with cutting-edge
              technology for over 25 years.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, color: "hover:text-blue-400" },
                { icon: Twitter, color: "hover:text-cyan-400" },
                { icon: Facebook, color: "hover:text-blue-500" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className={`text-slate-400 hover:bg-slate-800 ${social.color}`}>
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Products", href: "#" },
                { name: "Support", href: "#" },
              ].map((link, index) => (
                <motion.div key={link.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                </motion.div>
                <div className="text-slate-300">
                  <p>123 Medical Technology Drive</p>
                  <p>Innovation Park, CA 94025</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Phone className="h-5 w-5 text-green-400" />
                </motion.div>
                <span className="text-slate-300">+91 96333 79378</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Mail className="h-5 w-5 text-yellow-400" />
                </motion.div>
                <span className="text-slate-300">contact@tebramedicals.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-slate-300">
              Subscribe to our newsletter for the latest updates on biomedical technology and industry insights.
            </p>
            <div className="space-y-3">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} MedTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.div key={link} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
