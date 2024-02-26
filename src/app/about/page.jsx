"use client"

import {Nav} from "@/components/Nav";
import {Footer} from "@/components/Footer";
import {Tigraph} from "@/components/ui/Tigraph";
import {Grid} from "@/components/Grid";
import {gridImages} from "@/lib/objAbout";
import {EmptyBlock} from "@/components/EmptyBlock";

export default function About() {
    return (
        <>
            <Nav/>
            <EmptyBlock/>
            <Tigraph title={"About Us"}
                     paragraph={"We are a team of passionate embroiderers dedicated to creating beautiful and high-quality embroidered products. Our mission is to bring your designs to life with precision and artistry."}/>
            <EmptyBlock/>
            <Tigraph title={"Our History"}
                     paragraph={"Since our inception, we have been committed to excellence, delivering beautifully embroidered products to our customers."}/>
            <Grid gridImages={gridImages}/>
            <EmptyBlock/>
            <Footer/>
        </>
    )
}

