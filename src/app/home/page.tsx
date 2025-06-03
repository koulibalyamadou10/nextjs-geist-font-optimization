"use client";
import Link from "next/link";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
import Image from "next/image";


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm fixed z-50 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            initial={{y : -30, opacity : 0}}
                            animate={{y : 0, opacity : 1}}
                            transition={{duration : 0.5}}
                            className="flex justify-start">
                            <Link href="/" className="text-2xl font-bold text-gray-900">
                                Amadou Koulibaly
                            </Link>
                            {/* Toggle Dark Mode */}
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className={`p-2 rounded-full ${
                                    isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
                                }`}
                            >
                                {isDarkMode ? "🌙" : "☀️"}
                            </button>
                        </motion.div>



                        {/* Desktop Navigation */}
                        <motion.nav
                            initial={{y : -30, opacity : 0}}
                            animate={{y : 0, opacity : 1}}
                            transition={{duration : 0.5, delay : 0.5}}
                            className="hidden md:flex space-x-8">
                            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Me</Link>
                            <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</Link>
                            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projets</Link>
                            <Link href="/experiences" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</Link>
                            <Link href="/certifications" className="text-gray-600 hover:text-blue-600 transition-colors">Certifications</Link>
                            <Link href="/temoignages" className="text-gray-600 hover:text-blue-600 transition-colors">Temoignages</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                            <Link href="/footer" className="text-gray-600 hover:text-blue-600 transition-colors">Footer</Link>
                        </motion.nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden inset-0 bg-black bg-opacity-50 z-20">
                        <div className="bg-white p-4 space-y-4">
                            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">À propos</Link>
                            <Link href="/skills" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Compétences</Link>
                            <Link href="/projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projets</Link>
                            <Link href="/experiences" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Expérience</Link>
                            <Link href="/certifications" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Certifications</Link>
                            <Link href="/temoignages" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Temoignages</Link>
                            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
                            <Link href="/footer" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Footer</Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <main className="pt-16 relative z-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // L'élément commence avec une opacité de 0 et légèrement décalé vers le bas
                    animate={{ opacity: 1, y: 0 }} // L'élément devient complètement visible et se déplace vers sa position d'origine
                    exit={{ opacity: 0, y: 20 }} // Lors de la sortie, l'élément disparaît et se déplace vers le bas
                    transition={{ duration: 0.5 }} // La durée de l'animation (en secondes)
                    className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                {/* Contenu texte */}
                                <div className="col-span-6 sm:text-center lg:text-left">
                                    <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                                        <span className="block">Amadou Koulibaly</span>
                                        <span className="block mt-2">Développeur Full Stack</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Passionné par le développement web, mobile et intelligence artificielle
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <Link
                                                href="/contact"
                                                className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white transition-colors hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                                            >
                                                Me contacter
                                            </Link>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <Link
                                                href="/projects"
                                                className="w-full flex items-center justify-center px-5 py-2 border border-black text-base font-medium rounded-md text-black transition-colors hover:bg-blue-700 hover:text-white hover:border-none md:py-4 md:text-lg md:px-10"
                                            >
                                                Voir mes projets
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Image à droite */}
                                <div className="col-span-6 mt-10 lg:mt-0 relative">
                                    <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
                                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                                            <Image
                                                src="/images/jpgs/1.jpg"
                                                width={320}
                                                height={320}
                                                alt="Profile"
                                                className="relative z-10 rounded-lg shadow-lg"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{scale : 0, x : -80, opacity : 0}}
                    animate={{scale : 1, x : 0, opacity : 1}}
                    transition={{duration : 0.5, delay : 0.5}}
                    className="bg-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com" className="text-gray-900 hover:text-gray-600">
                                <FaGithub className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-900 hover:text-gray-600">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:koulibalyamadou@outlook.com" className="text-gray-900 hover:text-gray-600">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>

        </div>
    );
}
