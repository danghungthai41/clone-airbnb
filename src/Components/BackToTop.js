import React, {useEffect} from 'react'

export default function BackToTop() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <button id="backtotop">Scroll To Top</button>
}
