import { useState, createContext } from "react";


export interface toggleSideBar{
  state:Boolean,
  toggle: () => void
}

const SideBarState = createContext<toggleSideBar>({
  state:true,
  toggle: ()=> null
})

export default function SideBarStateProvider({children}:{children:React.ReactNode}){
  const [sideBarState, setSideBarState] = useState(false);

  const toggleSideBar = () => {
    setSideBarState(!sideBarState);
  }
  const exportValue:toggleSideBar = {
    state:sideBarState,
    toggle:toggleSideBar
  }
  return(
        <SideBarState.Provider value = {exportValue}> 
          {children}
        </SideBarState.Provider>
  )
}
export {SideBarState}
