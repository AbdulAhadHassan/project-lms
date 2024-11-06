import { connectDB } from "@/lib/dbConnect";
import UserModal from "@/lib/modal/UserModal"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(request){
    await connectDB();
const obj = await request.json();
console.log("obj=>",obj);
const user = await UserModal.findOne({email : obj.email})
if(user){
    return Response.json({error: true, message: "User already exists"},
        {status:403}
    );
}

const saltRounds = 10;
const hashedPassword = await bcrypt.hash(obj.password , saltRounds) 
obj.password = hashedPassword;
console.log("password=>",obj.password);
console.log("hashedPassword=>",hashedPassword);

let newUser = new UserModal({...obj})
newUser = await newUser.save();

 const token = jwt.sign({id: newUser._id, role: newUser.role}, process.env.JWT_key);

return Response.json({error: false, message: "new user added successfully",user: newUser, token});
}
export async function GET(request){
    return Response.json({message: "Hello get dbmongo"});

}

