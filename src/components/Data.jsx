import React from 'react'
import Datalist from './Datalist'

const Data = () => {
        const dataList=[{
            date:"28/10/2020",
            img:"data:image/png;base64,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",
            btnText:"Case Study",
            text1:"Amazon Gift",
            text2:"Pay",
            text3:"Desktop-Mobile",
            icon:"fa-solid fa-arrow-right-long",
        },{
            date:"17 Sep 2020",
            img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8ODg4AAAAKCgrX19d9fX3h4eH7+/sqKiqsrKx0dHS8vLzu7u5OTk62trbIyMhhYWGGhoaTk5MzMzNDQ0MeHh5mZmajo6Nubm6dnZ05OTlJSUlYWFhTU1MYGBgojUx6AAAD40lEQVR4nO3c25aiMBAFUClAQZCLtxYv/f+fOYBoC0N69QzHlSJ99jMPOZKkQogsFkREREREREREREREREREREREREREREREv0wQh6HtNrxRvpZaZLsZb5NEIr7n+Z+2G/ImwU7Ea8jOdlPeo+zy1Qk3ttvyDunuka9O6OJMs5SvgJ582G4O3rKZYL4SBrbbA5f2Avpiuz140UsXdXIYhr2ADnbSYBDQvRXNbpAwsd0gtGQQ0L0FTeT6KMwHAd2bSNf9SuHeNLMYFPvUdnvgeqXCl6Xt9uDFrytuFwPWT4UvY9C9Llorno+9Ds6irWu3cSF75+pg5yp+s7t2zW035G1O8rkPMycHoIuCrCrDcJt9M+CWcbg51J32XJTZzCpH+rGRL0W2Grkmafe7xa/dLwvnMzjzJt7r0kXkOGh9UIr0FnD3y6qxn0KdfCf954d7efCr5/yyinfDeM+Q+ncWV8VIvq71l7gebGlyFMMl7VWR8gGZmxvf3Mg78xXtRbHtEN+pRjvfP5LSdgyz8Pvb8+OIapesoIB1xK3tKOMqVMA6osrSmOAC1tONwsKYIiaZR0CVJWMD7KNH22HGAPuo0mqB66NKJ9IP2C1Uegdxt1ButqOMg41CX2OZaNxgqxmVpb6phaiAhe0oBjEsodZduCMooZxsJzFBzaRqXwgvQbfQP9hOYoKqFUpXMwvcg6HWUjF8Nz8hodJqD3tw8j3bQYwOmKlULraDGIGKhc4H3xYq4dp2ECPnVzSwhIp7KSjh3nYQI9A4VHzg20ctvNVW/LPzq7ar8ytv1DsnvadNYS+d1B5WhO0lat0Nhj3jK55NcQm1vt9GlQu9I7HEJVQ6nSJfHursp7BdfU/tP0pB+xj3iCrPROEGYhOxsh1nRI5MqHM7A3jUxNN52uQEvYmeSKltdYPtpm1GbY9S2G7qKdwfhs6mbcLMdqQB3PPFI6G2gbi4gOcafRUDefjS0/nC+xM518jZdpwRsCMnbUKV3yEAFgylZxaAN1FdqejARqLWJ33grqLa7X1QTVT88S/Qwkbrhltji4io7qmiJ5oeUe00cwfop5r7aGPyoX2V+1A9E498Kz6u8LCatHibxRdrgik3UW+tfzVhfar2FenAf7/Xl6vtpv+U8ex++/kE4/GbGcwyT8VIxPbbEIfLbRPJX99TmF3AkYPRdajT8+seaftNjOEVWv8vYxAPvoyxH25LZOdeRtFf6YeWt64rNr0zHFuJBaeuuzZXFMrXaqOCsP1OxGFt3FVaJeG5uWRTzTFfa5XOYIlCREREREREREREREREREREREREREREREREREREv8wfYtwnsICuGUcAAAAASUVORK5CYII=",
            btnText:"Case Study",
            text1:"Apple Gift",
            text2:"Payment",
            text3:"MacOS-Mobile",
            icon:"fa-solid fa-arrow-right-long",
        }]

        const Data1 = dataList.map((data,index)=>{
          return(
            <Datalist key={index} data={data} />
          ) 
        })
 
 
        return (
    <div>
        {Data1}
    </div>

  )
}

export default Data