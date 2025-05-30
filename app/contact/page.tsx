"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Torus, Sphere, Environment } from "@react-three/drei"
import { Suspense } from "react"

function ContactBackground3D() {
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[1, 0.3, 16, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial color="#3B82F6" metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.8]} position={[3, -1, -1]}>
          <meshStandardMaterial color="#10B981" metalness={0.6} roughness={0.3} />
        </Sphere>
      </Float>
      <Float speed={0.8} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.5, 0.2, 8, 16]} position={[0, 3, -3]}>
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </Torus>
      </Float>
    </>
  )
}

function Background3D() {
  return (
    <Canvas className="absolute inset-0 opacity-20">
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Suspense fallback={null}>
        <ContactBackground3D />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 relative overflow-hidden">
        <Background3D />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Get in Touch
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              animate={{
                textShadow: ["0 0 0px #3B82F6", "0 0 30px #3B82F6", "0 0 0px #3B82F6"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              Let's Discuss Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Healthcare Needs
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our team of experts is ready to help you find the perfect biomedical equipment solutions for your
              facility. Reach out today for a personalized consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-700 bg-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <CardHeader className="space-y-4 relative z-10">
                  <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
                  <p className="text-slate-300">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="name" className="text-slate-300">
                          Full Name *
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="email" className="text-slate-300">
                          Email Address *
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@hospital.com"
                            required
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="company" className="text-slate-300">
                          Company/Hospital
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Metropolitan Medical Center"
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div className="space-y-2" variants={itemVariants}>
                        <Label htmlFor="phone" className="text-slate-300">
                          Phone Number
                        </Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject *
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Equipment inquiry"
                          required
                          className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="message" className="text-slate-300">
                        Message *
                      </Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your equipment needs or questions..."
                          rows={6}
                          required
                          className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                <p className="text-slate-300">
                  Get in touch with our team through any of the following channels. We're here to help you find the
                  right solutions.
                </p>
              </div>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <Card className="border-slate-700 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Headquarters</h3>
                          <p className="text-slate-300">
                            Vazhakkad
                            <br />
                            Malappuram, Kerala-673640
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <Card className="border-slate-700 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        >
                          <Phone className="h-6 w-6 text-green-400 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Phone</h3>
                          <p className="text-slate-300">
                            +91 96333 79378
                            <br />
                            +91 73566 46538
                            <br />
                            +91 81380 38961
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)",
                  }}
                >
                  <Card className="border-slate-700 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                            x: [0, 3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        >
                          <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Email</h3>
                          <p className="text-slate-300">
                            contact@tebramedicals.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <Card className="border-slate-700 bg-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Clock className="h-6 w-6 text-purple-400 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                          <p className="text-slate-300">
                            Monday - Friday: 10:00 AM - 5:00 PM IST
                            <br />
                            Saturday: 9:00 AM - 2:00 PM PST
                            <br />
                            Sunday: Emergency support only
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Visit Our Facility
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Location</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Visit our state-of-the-art facility to see our equipment demonstrations and meet with our technical
              experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="border-slate-700 bg-slate-800 overflow-hidden shadow-2xl">
              <div className="h-96 bg-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d76.12345678901234!3d11.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058d%3A0x8ef5d3e1c0e1f1f1!2sVazhakkad%2C%20Malappuram%2C%20Kerala%20673640!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <motion.div
                  className="text-center space-y-2 relative z-10 bg-slate-800/90 p-4 rounded-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin className="h-12 w-12 text-blue-400 mx-auto" />
                  </motion.div>
                  <p className="text-slate-300">Visit our facility</p>
                  <p className="text-sm text-slate-400">Vazhakkad, Malappuram, Kerala-673640, India</p>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #3B82F6, #1E40AF)",
              "linear-gradient(45deg, #1E40AF, #7C3AED)",
              "linear-gradient(45deg, #7C3AED, #3B82F6)",
            ],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>

        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
              animate={{
                textShadow: ["0 0 0px #fff", "0 0 30px #fff", "0 0 0px #fff"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              Need Immediate Assistance?
            </motion.h2>
            <p className="text-xl text-blue-100">
              Our technical support team is available 24/7 for emergency equipment issues.
            </p>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 group">
                Call Emergency Support
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
