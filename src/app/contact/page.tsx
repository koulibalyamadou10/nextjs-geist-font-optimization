import {JSX} from "react";

export default function Contact() : JSX.Element{
    return (
        <section id="contact" className="w-11/12 max-w-4xl my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p>Téléphone : +224 621 82 00 65</p>
            <p>Email : <a href="mailto:koulibalyamadou@outlook.com"
                          className="text-blue-500">koulibalyamadou@outlook.com</a></p>
            <p>Adresse : Kiroty École Madou Koro</p>
        </section>
    )
}