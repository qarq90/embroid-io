import {NextResponse} from "next/server";
import User from "@/models/userState";
import connect from "@/lib/db";

export const POST = async (req) => {
    const {fName, sName, email, phone, message} = await req.json();

    try {
        console.log(fName, sName, email, phone, message)
        await connect();
        const user = await User.create({
            firstName: fName,
            secondName: sName,
            email: email,
            phone: phone,
            message: message
        });
        if (user) {
            console.log("Data Sent")
            return NextResponse.json({user, message: "Account Created"});
        } else {
            console.log("Failed to send data");
            return NextResponse.json({found: false});
        }
    } catch (error) {
        console.log("Failed to send data: " + error);
        return NextResponse.json({found: false});
    }
}