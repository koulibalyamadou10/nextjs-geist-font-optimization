"use client"
import { JSX } from "react";
import { motion } from "framer-motion";
import { FileText, Code, Lightbulb, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Définition des animations
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

interface FeatureCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
    >
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

export default function About(): JSX.Element {
    const { ref, inView } = useInView({
        triggerOnce: true, // L'animation se déclenche une seule fois quand la section devient visible
        threshold: 0.1, // Déclenche l'animation dès que 10% de la section est visible
    });

    return (
        <motion.section
            ref={ref}
            id="about"
            className="min-h-screen py-20 bg-gray-50 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                </motion.div>

                {/* Présentation principale */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
                    initial={{ opacity: 0, x: -300 }} // L'initialisation est en dehors de `inView`
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -300 }} // L'animation est conditionnée par `inView`
                    transition={{ duration: 1 }}
                >
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Koulibaly Amadou</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Je suis étudiant en Licence 3 Développement à l&#39;Université Gamal Abdel Nasser de Conakry.
                                Passionné par le développement web, mobile et l&#39;intelligence artificielle, je m&#39;efforce
                                constamment d&#39;approfondir mes connaissances et de rester à jour avec les dernières
                                technologies.
                            </p>
                            <motion.button
                                className="bg-blue-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Télécharger CV
                            </motion.button>
                        </div>
                        <div className="relative">
                            <motion.div
                                className="absolute -right-4 -bottom-4 w-72 h-72 bg-blue-200 rounded-full opacity-50"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <Image
                                src="/images/jpgs/2.jpg"
                                width={250}
                                height={250}
                                alt="Profile"
                                className="relative z-10 rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Caractéristiques */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, x: 300 }} // L'initialisation est en dehors de `inView`
                    animate={{  opacity: inView ? 1 : 0, x: inView ? 0 : -300 }} // L'animation est conditionnée par `inView`
                    transition={{ duration: 1 }}
                >
                    <FeatureCard
                        icon={<Code className="w-6 h-6 text-blue-600" />}
                        title="Développement Web"
                        description="Création d'applications web modernes et réactives"
                    />
                    <FeatureCard
                        icon={<Lightbulb className="w-6 h-6 text-blue-600" />}
                        title="Innovation"
                        description="Toujours à la recherche de nouvelles solutions créatives"
                    />
                    <FeatureCard
                        icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
                        title="Formation"
                        description="En constante progression et apprentissage"
                    />
                    <FeatureCard
                        icon={<FileText className="w-6 h-6 text-blue-600" />}
                        title="Projets"
                        description="Portfolio diversifié de réalisations concrètes"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
