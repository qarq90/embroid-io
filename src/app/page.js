"use client"

import {Nav} from "@/components/Nav";
import {Footer} from "@/components/Footer";
import {Tigraph} from "@/components/ui/Tigraph";
import {EmptyBlock} from "@/components/EmptyBlock";
import {BigImage} from "@/components/_home/BigImage";
import {HomeCards} from "@/components/_home/HomeCards";

export default function Home() {
    return (
        <>
            <Nav/>
            <div className="home-body"></div>
            <EmptyBlock/>
            <Tigraph title={"The Art of Embroidery"}
                     paragraph={"Embroidery is a timeless craft that showcases the skill and creativity of the artisan. From intricate patterns to delicate embellishments, each piece of embroidery is a labor of love."}/>
            <BigImage/>
            <EmptyBlock/>
            <Tigraph title={"Exquisite Embroidery Designs"}
                     paragraph={"Immerse yourself in the world of embroidery. Each stitch tells a story, and every design is a work of art. Browse our gallery of stunning creations."}/>
            <HomeCards/>
            <Footer/>
        </>
    );
}
