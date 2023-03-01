import React from 'react'

function Hero() {
    return (
        <div>
            <div class="flex flex-col md:flex-row">
                <div class="h-[300px] md:h-[600] md:basis-55 bg-gradient-to-tr from-[#191919]/60 via-[#191919]/80 to-[#191919] ">01</div>
                <div class="h-[300px] md:h-[600] md:basis-45 bg-gradient-to-r from-[#ec6558]/90 via-[#ec6558]/75 to-[#ec6558]">02</div>
            </div>
        </div>
    )
}

export default Hero
