import React from "react";
import { motion } from "framer-motion";
import shortlistedTeams from "../../assets/data/shortlistedTeamsDataOI.js";

export default function ShortlistedTeams() {
    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    // Animation variants for individual cards
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    // Header animation
    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section 
            id="shortlisted-teams" 
            className="relative min-h-screen py-16 px-4 overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-[#f3a83a]/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-20 w-20 h-20 bg-[#802b1d]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#2c2b4c]/10 rounded-full blur-xl"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-rye tracking-wider text-[#f3a83a] text-stroke-strong mb-4">
                        TEAMS SHORTLISTED
                    </motion.h2>
                    <motion.div className="flex items-center justify-center gap-4 mb-6">
                        {/* Decorative carnival elements */}
                        <div className="text-4xl">🎪</div>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#802b1d] via-[#f3a83a] to-[#2c2b4c] rounded-full"></div>
                        <div className="text-4xl">🎨</div>
                    </motion.div>
                    <motion.p className="text-lg md:text-xl text-[#eadccb] text-outline-strong max-w-2xl mx-auto">
                        Congratulations to all the teams that made it through our rigorous selection process!
                    </motion.p>
                </motion.div>

                {/* Teams Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {shortlistedTeams.map((team, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={cardVariants}
                        >
                            {/* Team Card */}
                            <motion.div
                                className="relative h-32 bg-gradient-to-br from-white/95 to-white/85 rounded-2xl p-6 flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-lg overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Carnival border glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#802b1d]/20 via-[#f3a83a]/20 to-[#2c2b4c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Team name */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center leading-tight z-10 relative">
                                    {team.teamName || team.name || `Team ${index + 1}`}
                                </h3>

                                {/* Hover effect overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#f3a83a]/10 to-[#802b1d]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                ></motion.div>

                                {/* Decorative corner elements */}
                                <div className="absolute top-2 left-2 w-3 h-3 bg-[#f3a83a]/30 rounded-full opacity-60"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 bg-[#802b1d]/30 rounded-full opacity-60"></div>
                                <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#2c2b4c]/30 rounded-full opacity-60"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#f3a83a]/30 rounded-full opacity-60"></div>
                            </motion.div>

                            {/* Floating carnival effect */}
                            <motion.div
                                className="absolute -top-2 -left-2 w-6 h-6 bg-[#f3a83a]/20 rounded-full blur-sm"
                                animate={{
                                    y: [0, -5, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom decorative section */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-6">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#f3a83a] to-transparent rounded-full"></div>
                        <div className="text-2xl">🎊</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#f3a83a] to-transparent rounded-full"></div>
                    </div>
                    <p className="text-[#eadccb]/70 mt-4 text-sm md:text-base">
                        Ready to code, innovate, and celebrate at CodeUtsava 9.0!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}