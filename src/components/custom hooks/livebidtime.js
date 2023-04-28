
import { useState } from "react"
export default function useBidtimer()
{
    const [count,setcount]=useState(0)
    function increment()
    {
        setcount(count+1)
        console.log("inside hook file")
    }
    return {count,increment}
}
