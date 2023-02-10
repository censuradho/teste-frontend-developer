import { useState } from 'react'
import * as Styles from './styles'

import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./components").then(d => d.Navigation), {
  ssr: false
});

const BottomNav = dynamic(() => import("./components").then(d => d.BottomNav), {
  ssr: false
});

export function MainLayout ({ children }: any) {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)
  
  return (
    <Styles.Container>
      <Navigation onToggleMenu={() => setIsOpenNavigation(prevState => !prevState)} open={isOpenNavigation} />
      <BottomNav onToggleMenu={() => setIsOpenNavigation(prevState => !prevState)}/>
      <Styles.Main>
        {children}
      </Styles.Main>
    </Styles.Container>
  )
}