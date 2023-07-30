import React, { useEffect } from 'react'

interface MainPageProps {
    
}

const MainPage:React.FC<MainPageProps> = ({}) => {

    useEffect(() => {
        document.title = 'Главная'
      },[])

    return (
        <div>
            <h1>Главная</h1>
        </div>
    )
}
export default MainPage;