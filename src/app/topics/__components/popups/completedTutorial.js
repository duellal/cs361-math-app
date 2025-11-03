'use client'

import ContentDiv from "@/app/__components/contentDiv"

export default function CompletedTutorial(props){
    const {} = props

    return(
        <div className={`${popupDivTw}`}>
            <ContentDiv
                div_key={`tutorial-complete-div`}
                div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[550px] content-end justify-between rounded-[60px]`}
                order={[]}
            />
        </div>
    )
}