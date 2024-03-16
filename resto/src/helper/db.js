import mongoose from "mongoose"
import  User  from "../models/user"
export const connectdb = async()=>{
   try {
         const connection = await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"harry",
        });
        console.log("db Connected boi ....");

        const gg= new User({

            name:"hammad",
            email:"hammad123@gmail.com",
            password:"hammad123",
            about:"testing",
        });

        await gg.save();
        console.log("created");

        // const f= new userr({
        //     name:"hammad hussain",
        //     email:"hammad@gmail.com"
        // })
        //  await  f.save();
        // console.log("created");
        // console.log(connection);
    } catch (error) {
        console.log("error");
        console.log(error);
    }
}