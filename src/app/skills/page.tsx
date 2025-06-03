"use client";
import { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills(): JSX.Element {
    return (
        <section
            id="skills"
            className="w-11/12 max-w-4xl my-12 mx-auto p-8 rounded-lg shadow-lg"
        >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Compétences</h2>
            <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300"
                    >
                        <Image
                            src={skill.image}
                            alt={skill.title}
                            width={300}
                            height={300}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />

                        <h3 className="text-xl font-semibold text-blue-600 mb-4">
                            {skill.title}
                        </h3>

                        <p className="text-gray-700 mb-4">{skill.description}</p>

                        <div className="relative">
                            <motion.div
                                className="h-2 bg-gray-200 rounded-full overflow-hidden"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.percentage}%` }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="h-2 bg-blue-600"></div>
                            </motion.div>
                            <div className="text-right text-gray-600 mt-1">{`${skill.percentage}%`}</div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}

const skillsData = [
    {
        title: "Développeur Full Stack",
        description:
            "Expérience approfondie dans le développement frontend et backend.",
        image: "/images/jpgs/default.jpg",
        percentage: 90,
    },
    {
        title: "JAVA",
        description:
            "Maîtrise de Java pour le développement d'applications robustes et performantes.",
        image: "/images/jpgs/default.jpg",
        percentage: 80,
    },
    {
        title: "PYTHON",
        description:
            "Maîtrise de Python pour le développement d'applications performantes.",
        image: "/images/jpgs/default.jpg",
        percentage: 70,
    },
    {
        title: "React JS",
        description:
            "Création d'interfaces utilisateur dynamiques et réactives avec React.js.",
        image: "/images/jpgs/default.jpg",
        percentage: 70,
    },
    {
        title: "Next.js",
        description:
            "Utilisation de Next.js pour le développement de sites web performants.",
        image: "/images/jpgs/default.jpg",
        percentage: 39,
    },
    {
        title: "Django",
        description:
            "Développement backend avec Django pour des applications sécurisées.",
        image: "/images/jpgs/default.jpg",
        percentage: 80,
    },
    {
        title: "Flutter",
        description:
            "Création d'applications mobiles cross-plateforme avec Flutter.",
        image: "/images/jpgs/default.jpg",
        percentage: 70,
    },
    {
        title: "C#",
        description: "Développement d'applications Windows et de jeux avec C#.",
        image: "/images/jpgs/default.jpg",
        percentage: 45,
    },
];
