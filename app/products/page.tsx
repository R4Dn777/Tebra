"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Filter, ArrowRight } from "lucide-react"

// Sample product data - replace with your actual products
const products = [
  {
    id: 1,
    name: "Digital X-Ray System",
    category: "Imaging",
    description: "High-resolution digital X-ray system with advanced image processing capabilities.",
    image: "/assets/images/products/xray.jpg",
    features: ["High Resolution", "Low Radiation", "Quick Processing"],
  },
  {
    id: 2,
    name: "Patient Monitor",
    category: "Monitoring",
    description: "Multi-parameter patient monitoring system with real-time data tracking.",
    image: "/assets/images/products/monitor.jpg",
    features: ["Real-time Monitoring", "Multi-parameter", "Alarm System"],
  },
  {
    id: 3,
    name: "Ultrasound Machine",
    category: "Imaging",
    description: "Portable ultrasound system with advanced imaging capabilities.",
    image: "/assets/images/products/ultrasound.jpg",
    features: ["Portable", "High Definition", "Multi-probe"],
  },
  {
    id: 4,
    name: "Ventilator",
    category: "Life Support",
    description: "Advanced mechanical ventilator with multiple ventilation modes.",
    image: "/assets/images/products/ventilator.jpg",
    features: ["Multiple Modes", "Backup Battery", "Alarm System"],
  },
  {
    id: 5,
    name: "Defibrillator",
    category: "Emergency",
    description: "Automated external defibrillator with voice guidance.",
    image: "/assets/images/products/defibrillator.jpg",
    features: ["Voice Guidance", "ECG Analysis", "Biphasic Technology"],
  },
  {
    id: 6,
    name: "Infusion Pump",
    category: "Therapy",
    description: "Precision infusion pump with multiple delivery modes.",
    image: "/assets/images/products/infusion.jpg",
    features: ["Precision Control", "Multiple Modes", "Safety Features"],
  },
]

const categories = ["All", "OT", "Monitoring", "Life Support", "Emergency", "Therapy"]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 relative overflow-hidden">
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
                Our Products
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
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Medical Equipment
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Discover our comprehensive range of cutting-edge medical equipment designed to enhance patient care and
              improve healthcare outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Search and Filter */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-400"
                  />
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-slate-700 text-slate-600 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-slate-700 bg-slate-800 overflow-hidden">
                  <div className="aspect-video relative bg-slate-700">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      [Product Image]
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold text-white">{product.name}</CardTitle>
                        <Badge variant="secondary" className="mt-2 bg-blue-500/20 text-blue-300">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-slate-600 text-slate-300 bg-slate-700/50"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
} 