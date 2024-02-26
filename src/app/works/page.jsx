"use client"

import {Nav} from "@/components/Nav";
import {Footer} from "@/components/Footer";
import {Tigraph} from "@/components/ui/Tigraph";
import {Dual} from "@/components/about/Dual";
import {dualGrid, gridImages} from "@/lib/objAbout";
import {Grid} from "@/components/Grid";
import {worksImagesA,worksImagesB} from "@/lib/objWorks";

export default function Works() {
    return (
        <>
            <Nav/>
            <Tigraph title={"Our Process"}
                     paragraph={"We take pride in our meticulous process, ensuring that every stitch is perfect and every design is brought to life with precision."}/>
            <Grid gridImages={worksImagesA}/>
            <Dual dualGrid={dualGrid}/>
            <Grid gridImages={worksImagesB}/>
            <Footer/>
        </>
    )
}

