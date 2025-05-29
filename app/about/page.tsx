"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Shield, CheckCircle, Target, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, Box, Environment } from "@react-three/drei"
import { Suspense } from "react"

function FloatingElements() {
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#3B82F6" metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Box args={[0.8, 0.8, 0.8]} position={[2, -1, 0]}>
          <meshStandardMaterial color="#10B981" metalness={0.6} roughness={0.3} />
        </Box>
      </Float>
      <Float speed={0.8} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.3]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
    </>
  )
}

function Background3D() {
  return (
    <Canvas className="absolute inset-0 opacity-30">
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
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

export default function AboutPage() {
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
                About MedTech Solutions
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
              Pioneering the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Healthcare Technology
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              For over 25 years, we've been at the forefront of biomedical innovation, delivering cutting-edge equipment
              that empowers healthcare professionals to save lives and improve patient outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div className="space-y-6" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Target className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To revolutionize healthcare delivery by providing state-of-the-art biomedical equipment that enhances
                  diagnostic accuracy, improves surgical precision, and ultimately saves lives. We are committed to
                  advancing medical technology while ensuring accessibility and reliability for healthcare providers
                  worldwide.
                </p>
              </motion.div>

              <motion.div className="space-y-6" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Globe className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To be the global leader in biomedical equipment innovation, creating a world where every healthcare
                  facility has access to the most advanced, reliable, and user-friendly medical technology available.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Modern biomedical laboratory with advanced equipment"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl border border-slate-700"
                />
              </motion.div>

              {/* Floating particles */}
              <motion.div
                className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Our Experience
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Decades of Excellence in Healthcare Innovation
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                number: "25+",
                label: "Years of Experience",
                description: "Leading biomedical innovation since 1999",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Users,
                number: "500+",
                label: "Healthcare Partners",
                description: "Trusted by hospitals worldwide",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Globe,
                number: "50+",
                label: "Countries Served",
                description: "Global reach with local support",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Shield,
                number: "99.9%",
                label: "Equipment Uptime",
                description: "Reliable performance when it matters most",
                color: "from-purple-400 to-pink-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-slate-700 border-slate-600 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
                  <CardContent className="p-8 space-y-4 relative z-10">
                    <motion.div
                      animate={{
                        rotate: [0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <stat.icon className="h-12 w-12 text-blue-400 mx-auto" />
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold text-white"
                      animate={{
                        textShadow: ["0 0 0px #3B82F6", "0 0 20px #3B82F6", "0 0 0px #3B82F6"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-lg font-semibold text-white">{stat.label}</div>
                    <p className="text-slate-300">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Certifications & Standards
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Committed to Quality and Safety</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our comprehensive certifications and adherence to the highest
              industry standards.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "FDA Approval",
                description: "All our medical devices are FDA approved and comply with the highest safety standards",
                icon: Shield,
                color: "from-red-500 to-pink-500",
              },
              {
                title: "ISO 13485",
                description: "Quality management systems for medical devices design and manufacturing",
                icon: Award,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "CE Marking",
                description: "European conformity certification for medical device safety and performance",
                icon: CheckCircle,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "IEC 62304",
                description: "Medical device software lifecycle processes compliance",
                icon: Shield,
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "ISO 14971",
                description: "Risk management for medical devices throughout product lifecycle",
                icon: Award,
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "HIPAA Compliant",
                description: "Full compliance with healthcare data privacy and security regulations",
                icon: CheckCircle,
                color: "from-teal-500 to-cyan-500",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-slate-600 bg-slate-800 h-full relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 space-y-4 relative z-10">
                    <motion.div
                      animate={{
                        rotate: [0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <cert.icon className="h-10 w-10 text-blue-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-slate-300">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Leadership Team
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Experts Driving Innovation</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our leadership team combines decades of medical expertise with cutting-edge technology innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Kamil Akthar",
                role: "Chief Executive Officer",
                experience: "Former Chief of Biomedical Engineering at Johns Hopkins",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Parvesh",
                role: "Chief Financial Officer",
                experience: "20+ years in medical device innovation",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Famid",
                role: "VP of Quality Assurance",
                experience: "Expert in FDA regulatory compliance",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mohammed Radin",
                role: "Chief Technology Officer",
                experience: "Expert in FDA regulatory compliance",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-700 border-slate-600 text-center overflow-hidden group">
                  <CardContent className="p-6 space-y-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500/30 group-hover:border-blue-400 transition-colors"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-blue-400 font-medium">{member.role}</p>
                      <p className="text-slate-300 mt-2">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Partner with Industry Leaders
            </motion.h2>
            <p className="text-xl text-blue-100">
              Join hundreds of healthcare facilities that trust us with their most critical equipment needs.
            </p>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 group">
                Start a Partnership
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
