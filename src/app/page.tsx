"use client";
import {ThemeProvider} from "@/context/ThemeContext";
import Home from "@/app/home/page";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Footer from "@/app/footer/page";
import {JSX} from "react";

export default function Landing() : JSX.Element {

    return (
        <ThemeProvider>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Footer></Footer>
        </ThemeProvider>
    );
}
