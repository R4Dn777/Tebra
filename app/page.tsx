"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, ArrowRight, Zap, Shield, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import dynamic from "next/dynamic"


function AnimatedMedicalDevice() {
  const meshRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.5
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        

        {/* Control panel */}
        <mesh position={[0, -0.9, 0.41]}>
          
          <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      {/* Floating diagnostic sphere */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={sphereRef} position={[3, 1, -1]}>
          <sphereGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#8B5CF6"
            metalness={0.8}
            roughness={0.2}
            emissive="#8B5CF6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Medical scanner ring */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[1.2, 0.3, 16, 32]} />
          <meshStandardMaterial
            color="#EF4444"
            metalness={0.9}
            roughness={0.1}
            emissive="#DC2626"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color={`hsl(${200 + Math.random() * 60}, 70%, 60%)`}
              emissive={`hsl(${200 + Math.random() * 60}, 70%, 40%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Hero3DScene() {
  return (
    <Canvas className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#10B981" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#8B5CF6" />

      <Suspense fallback={null}>
        <AnimatedMedicalDevice />

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          
            <meshStandardMaterial
              color="#3B82F6"
              metalness={0.8}
              roughness={0.2}
              emissive="#1E40AF"
              emissiveIntensity={0.2}
            />
        </Float>
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>

        {/* Enhanced 3D Background */}
        <div className="absolute right-0 top-0 w-full h-full opacity-60">
          <Hero3DScene />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30 backdrop-blur-sm"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Trusted by 500+ Healthcare Facilities
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
                  variants={itemVariants}
                >
                  Innovating Healthcare Through{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Precision Equipment
                  </motion.span>
                </motion.h1>

                <motion.p className="text-xl text-slate-300 leading-relaxed max-w-2xl" variants={itemVariants}>
                  Advanced biomedical solutions that empower healthcare professionals to deliver exceptional patient
                  care with cutting-edge technology and unwavering reliability.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg group shadow-lg"
                  >
                    Explore Equipment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-600 text-slate-800 hover:bg-slate-800 hover:border-slate-500 hover:text-white px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    Request Consultation
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div className="flex items-center gap-8 pt-6" variants={containerVariants}>
                {[
                  { number: "25+", label: "Years Experience", color: "text-blue-400" },
                  { number: "500+", label: "Installations", color: "text-green-400" },
                  { number: "99.9%", label: "Uptime", color: "text-purple-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <motion.div
                      className={`text-3xl font-bold ${stat.color}`}
                      animate={{
                        textShadow: ["0 0 0px currentColor", "0 0 20px currentColor", "0 0 0px currentColor"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative lg:block hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Advanced biomedical equipment in modern hospital setting"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl border border-slate-700/50 backdrop-blur-sm"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-slate-800/90 p-6 rounded-xl shadow-2xl border border-slate-700 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                  y: -5,
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-white">FDA Approved</div>
                    <div className="text-sm text-slate-400">All equipment certified</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating particles around the image */}
              <motion.div
                className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 left-10 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-5 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Award className="w-3 h-3 mr-1" />
                Featured Products
              </Badge>
            </motion.div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Precision Equipment for Every Need</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From diagnostic imaging to surgical instruments, our comprehensive range of biomedical equipment sets the
              standard for healthcare excellence.
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
                title: "MRI Systems",
                description: "High-resolution magnetic resonance imaging with advanced AI-powered diagnostics",
                image: "/placeholder.svg?height=300&width=400",
                features: ["3T Field Strength", "AI Diagnostics", "Patient Comfort"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Surgical Robots",
                description: "Precision robotic systems for minimally invasive surgical procedures",
                image: "/placeholder.svg?height=300&width=400",
                features: ["Sub-millimeter Precision", "3D Visualization", "Haptic Feedback"],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Patient Monitors",
                description: "Comprehensive vital sign monitoring with real-time analytics",
                image: "/placeholder.svg?height=300&width=400",
                features: ["Multi-parameter", "Wireless Connectivity", "Alert Systems"],
                color: "from-green-500 to-emerald-500",
              },
            ].map((equipment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="group bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={equipment.image || "/placeholder.svg"}
                        alt={equipment.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${equipment.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">{equipment.title}</h3>
                    <p className="text-slate-400">{equipment.description}</p>
                    <div className="space-y-2">
                      {equipment.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Shield className="w-3 h-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Trusted by Healthcare Leaders</h2>
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
                name: "Dr. Sarah Chen",
                role: "Chief of Radiology",
                hospital: "Metropolitan Medical Center",
                content:
                  "The precision and reliability of their MRI systems have transformed our diagnostic capabilities. Patient outcomes have improved significantly.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Head of Surgery",
                hospital: "St. Mary's Hospital",
                content:
                  "Their surgical robots have enabled us to perform complex procedures with unprecedented precision. The training and support were exceptional.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Lisa Thompson",
                role: "Biomedical Engineer",
                hospital: "Regional Health System",
                content:
                  "Outstanding equipment quality and responsive technical support. Their maintenance programs keep our systems running at peak performance.",
                rating: 5,
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-700 border-slate-600 h-full">
                  <CardContent className="p-6 space-y-4">
                    <motion.div
                      className="flex gap-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <p className="text-slate-300 italic">"{testimonial.content}"</p>
                    <div className="border-t border-slate-600 pt-4 flex items-center gap-3">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.role}</div>
                        <div className="text-sm text-blue-400">{testimonial.hospital}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
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
              Trusted Partners
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Partnering with Healthcare Excellence</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We're proud to work with leading healthcare institutions and technology partners worldwide.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Mayo Clinic",
              "Johns Hopkins",
              "Cleveland Clinic",
              "Mass General",
              "Stanford Health",
              "Kaiser Permanente",
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  filter: "grayscale(0%)",
                }}
                className="flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-slate-700 rounded-lg mb-2 mx-auto border border-slate-600"
                    whileHover={{
                      backgroundColor: "#3B82F6",
                      borderColor: "#60A5FA",
                    }}
                  ></motion.div>
                  <div className="text-sm font-medium text-slate-400">{partner}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] opacity-10"></div>
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
                textShadow: ["0 0 0px #fff", "0 0 20px #fff", "0 0 0px #fff"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              Ready to Transform Your Healthcare Facility?
            </motion.h2>
            <p className="text-xl text-blue-100">
              Let our experts help you choose the right biomedical equipment for your specific needs. Get a personalized
              consultation today.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-700 hover:bg-white hover:text-blue-700 px-8 py-3"
                >
                  Download Catalog
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
