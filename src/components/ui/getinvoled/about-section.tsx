"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="bg-green-600 p-4 rounded-full"
              >
                <Heart className="w-12 h-12 text-white" />
              </motion.div>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-green-600">450+</div>
              <h3 className="text-xl font-semibold text-gray-800">Children Currently Supported</h3>
              <p className="text-gray-600">
                Through the support of generous sponsors, over 450 children in our homes are currently receiving monthly
                support but many more still need your help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-green-600">∞</div>
              <h3 className="text-xl font-semibold text-gray-800">Endless Hope</h3>
              <p className="text-gray-600">
                We believe that every child deserves love, opportunity, and hope and we can't do it alone. By
                partnering with us, you become a vital part of the mission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-green-600">3</div>
              <h3 className="text-xl font-semibold text-gray-800">Global Partners</h3>
              <p className="text-gray-600">
                Thanks to the faithful partnership with SEAPC USA and Australia, and Church of Bukit Timah Singapore, we
                are making hope possible one child at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
