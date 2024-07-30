import { Database } from "@/app/interfaces/dataBaseType";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL ||"",process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "");
export const getOrderList = async ()=>{
    const { data: Orders, error } = await supabase.from('Orders').select('*').is("isDelete",null)
    return {Orders,error}   
}

export const deleteOrderList =async (id:number) => {
    const curretDate = new Date();
    const {data,error} = await supabase.from('Orders').update({isDelete:curretDate.toISOString()}).eq("id",id.toString()).select()
    return {data,error}
}