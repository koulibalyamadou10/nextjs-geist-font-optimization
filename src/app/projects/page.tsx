"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Structure des projets avec 3 projets supplémentaires en Java et 2 en Android
const projects = [
    {
        id : 1,
        title: "Sansitech – L’Agriculture Intelligente de Demain",
        description: "Sansitech est un projet innovant conçu pour transformer le quotidien des agriculteurs en alliant technologie de pointe et intelligence artificielle. Ce dispositif se concentre sur l’optimisation des conditions agricoles et la protection des plantations grâce à des outils intelligents et connectés.",
        goal: [
            {
                id : 1,
                title : "Collecter des données environnementales en temps réel",
                description : "Grâce à une gamme de capteurs (température, humidité, luminosité, etc.), Sansitech recueille en permanence les données nécessaires pour surveiller l’état des champs."
            },
            {
                id : 2,
                title: "Analyser les données avec l’intelligence artificielle",
                description: "Les informations collectées sont traitées par un système intelligent qui fournit des recommandations personnalisées, comme le moment idéal pour arroser ou fertiliser."
            },
            {
                id : 3,
                title : "Protection proactive des cultures",
                description: "Une caméra intégrée analyse les images pour détecter les menaces potentielles : animaux nuisibles, maladies des plantes, ou intrusion humaine. En cas de danger, des actions automatiques sont déclenchées, comme l’activation de systèmes sonores ou lumineux pour éloigner les intrus.",
            },
            {
                id : 4,
                title: "Connectivité et accessibilité",
                description: "Avec un serveur MQTT hébergé sur AWS, Sansitech garantit une transmission rapide et sécurisée des données. Les agriculteurs peuvent accéder aux informations et aux alertes directement via une application mobile, où les données sont affichées sous forme de graphiques intuitifs et de notifications en temps réel."
            },
            {
                id : 5,
                title: "Gestion écologique et efficace",
                description: "En automatisant certaines tâches (irrigation, fertilisation) et en fournissant des prédictions précises, Sansitech permet une meilleure gestion des ressources naturelles tout en augmentant les rendements agricoles."
            }
        ],
        conclusion : "Avec Sansitech, l’agriculture entre dans une nouvelle ère où chaque plante est surveillée, chaque ressource est optimisée, et chaque agriculteur est épaulé par une technologie fiable et durable. Ce projet porte l’ambition de nourrir la planète de manière plus intelligente et respectueuse de l’environnement. 🌱",
        technology: "Flutter",
        image: "/images/jpgs/default.jpg",
    },
    {
        id : 2,
        title: "KBANK - Gestion d'une Bank",
        description: "Une application web, qui consiste a gerer une banque, il s'agit d'un projet de fin de module de la licence 2 informatique Développement Logiciel",
        technology: "Symfony",
        image: "/images/jpgs/default.jpg",
    },
    {
        id : 3,
        title: "Bibliothèque Java",
        description: "Librairie pour remplir une base de donnée mysql de données fake.",
        technology: "Java",
        image: "/images/jpgs/default.jpg",
    },
    {
        id : 5,
        title: "Chat en temps réel – Une application Android connectée",
        description: "Le projet Chat en temps réel est une application Android moderne qui permet aux utilisateurs de discuter instantanément, où qu’ils soient. Avec un design intuitif et une technologie performante, cette application se veut fluide, rapide et sécurisée, idéale pour les communications personnelles ou professionnelles. Les messages sont cryptés avec l'algorithme de cesar avec une clé de chiffrement forte. Cela me permet d'appliquer et de jumeler le cours de Droit Sécurité Informatique et La programmation Java",
        goal: [
            {
                id : 1,
                title: "Messagerie instantanée",
                description: ["Les utilisateurs peuvent envoyer et recevoir des messages texte en temps réel.", "Notifications push pour chaque message reçu."]
            },
            {
                id: 2,
                title: "Fonctionnalités multimédias",
                description: ["Envoi de fichiers multimédias (images, vidéos, documents).", "Visualisation des images partagées directement dans l'application."]
            },
            {
                id: 3,
                title: "Convivialité et interactivité",
                description: ["Interface utilisateur moderne et minimaliste.", "Indicateur de statut (\"En ligne\", \"Écriture...\").", "Historique de chat sauvegardé pour consultation ultérieure."]
            },
            {
                id: 4,
                title: "Gestion des contacts",
                description: ["Liste de contacts avec recherche et filtrage.", "Ajout de nouveaux contacts.", "Suppression de contacts."]
            },
            {
                id: 5,
                title: "Sécurité des données",
                description: ["Messages chiffrés de bout en bout pour garantir la confidentialité des conversations.", "Authentification sécurisée pour l'accès aux comptes utilisateurs."]
            }
        ],
        technology: "Java",
        technologies: ["Java", "Aws"],
        image: "/images/jpgs/default.jpg",
    },
    {
        id : 6,
        title: "KInnovate – Système de Gestion Scolaire pour ISCO Fils.",
        description: "KInnovate est une application de gestion scolaire destinée à optimiser l’administration quotidienne de l’école ISCO Fils. Développée initialement comme une application de bureau en Java, elle permet de gérer efficacement les paiements des frais scolaires, la liste des élèves, l’impression des cartes scolaires, et la génération de statistiques financières. Ce projet vise à automatiser les processus manuels tout en offrant une expérience utilisateur intuitive.",
        goal: [
            {
                id: 1,
                title: "Faciliter la gestion scolaire",
                description: "en automatisant les tâches administratives telles que la gestion des paiements et des inscriptions."
            },
            {
                id: 2,
                title: "Offrir des outils statistiques",
                description: "pour analyser les données financières et scolaires."
            },
            {
                id: 3,
                title: "Assurer une transition numérique",
                description: "en fournissant une interface utilisateur intuitive et moderne."
            },
            {
                id: 4,
                title: "Renforcer la sécurité des données",
                description: "personnelles et financières des élèves et de l’administration."
            },
            {
                id: 5,
                title: "Proposer une plateforme évolutive",
                description: "permettant l’ajout de nouvelles fonctionnalités à mesure que les besoins évoluent."
            }
        ],
        technology: "Java",
        image: "/images/jpgs/default.jpg",
    },
];



const ProjectCard = ({
                         title,
                         description,
                         technology,
                         image,
                     }: {
    title: string;
    description: string;
    technology: string;
    image: string;
}) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
    >
        {/* Image du projet */}
        <Image
            src={image}
            width={250}
            height={250}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <span className="text-sm text-blue-600 font-bold">{technology}</span>
    </motion.div>
);


export default function Projects() {
    // State pour gérer le filtre des technologies
    const [filter, setFilter] = useState("All");

    // Filtrer les projets en fonction de la technologie sélectionnée
    const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.technology === filter);

    return (
        <section id="projects" className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre */}
                <motion.div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                </motion.div>

                {/* Filtre des technologies */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center mb-8">
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("All")}
                    >
                        Tout afficher
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "Flutter" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("Flutter")}
                    >
                        Flutter
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "Java" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("Java")}
                    >
                        Java
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "Android" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("Android")}
                    >
                        Android
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "Django" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("Django")}
                    >
                        Django
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${
                            filter === "Symfony" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setFilter("Symfony")}
                    >
                        Symfony
                    </button>
                </div>


                {/* Liste des projets */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technology={project.technology}
                            image={project.image} // Ajout de l'image ici
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
