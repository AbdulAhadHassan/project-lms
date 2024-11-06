import { connectDB } from "@/lib/dbConnect";
import UserModal from "@/lib/modal/UserModal"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request){
    await connectDB();
const obj = await request.json();
console.log("obj=>",obj);
const user = await UserModal.findOne({email : obj.email})
console.log("user=>",user);
if(!user){
    return Response.json({error: true, message: "User does not exist"},
        {status:400}
    );
}
const isPasswordMatch = await bcrypt.compare(obj.password, user.password);
console.log("isPasswordMatch=>",isPasswordMatch);

if(!isPasswordMatch){
    return Response.json({error: true, message: "Password does not match"},
        {status:400}
    );
}

const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_key);


return Response.json({error: false, message: "user login successfully",user,token});
}