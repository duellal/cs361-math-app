'use client'


export default function TutorialComponent() {
    return (
        <div
            className={`relative left-2/5 -top-100`}
        >
            <div
                className="
                        relative left-1/5 top-[-100px]
                        min-size-fit bg-white
                        border-4 border-dark-blue
                        rounded-[10px] p-5
                    
                        before:content-[''] before:absolute
                        before:left-[18%] before:bottom-[-32px]
                        before:border-l-[16px] before:border-l-dark-blue
                        before:border-r-[16px] before:border-r-transparent
                        before:border-t-[16px] before:border-t-dark-blue
                        before:border-b-[16px] before:border-b-transparent

                        after:content-[''] after:absolute
                        after:left-[20%] after:bottom-[-20px]
                        after:border-l-[10px] after:border-l-white
                        after:border-r-[10px] after:border-r-transparent
                        after:border-t-[10px] after:border-t-white
                        after:border-b-[10px] after:border-b-transparent
                    "
            >
                    <p className="text-dark-blue">Some text here for width</p>
            </div>
            
        </div>
    );
}

{/**
    relative left-1/5 top-[-100px]
    min-size-fit bg-white
    border-4 border-dark-blue
    rounded-[10px] p-5

    before:content-[''] before:absolute 
    before:left-1/5 before:bottom-[-24px]
    before:size-6 before:bg-inherit
    before:transform before:origin-center 
    before:rotate-45 before:-translate-[50%]
    before:border-4 before:border-dark-blue
    before:border-t-4 before:border-t-transparent
    before:border-l-4 before:border-l-transparent
    before:border-r-4 before:border-r-transparent

    after:content-[''] after:absolute 
    after:left-1/5 after:bottom-[-13px]
    after:size-6 after:bg-inherit
    after:transform after:origin-center 
    after:rotate-45 after:-translate-[50%]
    after:border-4 after:border-dark-blue
    after:border-t-4 after:border-t-white
    after:border-l-4 after:border-l-white
    after:border-r-4 after:border-r-dark-blue
    after:border-b-4 after:border-b-dark-blue
 */}