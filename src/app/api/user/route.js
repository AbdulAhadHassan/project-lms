import { dbConnect } from "@/lib/dbConnect";
import UserModal from "@/lib/modal/UserModal"

export async function POST(request){
    await dbConnect();
const obj = await request.json();
console.log("obj=>",obj);
// const user = await UserModal.findOne({email : obj.email})
// console.log("user=>",user);
return Response.json({message: "Hello post dbmongo"});
}
export async function GET(request){
    return Response.json({message: "Hello get dbmongo"});

}

