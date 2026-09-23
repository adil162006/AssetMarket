import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Button } from '@/components/ui/button'
import {X,Menu} from "lucide-react"
import  {FcGoogle} from "react-icons/fc"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
const Home = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const[modelOpen,setModelOpen]=useState(false)
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <header className='sticky top-0 z-50 border-slate-100 border-b  bg-white backdrop-blur'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="logo" className='h-6 w-6 rounded-sm object-contain'/>
          <span className='text-lg font-semibold tracking-tight'>AssestMarket</span>

        </div>
        <div className='hidden items-center gap-3 md:flex '>
          <Button className='bg-indigo-600 hover:bg-indigo-700' onClick={()=>setModelOpen(!modelOpen)}>
            SignIn
          </Button>
        </div>
        <Button className="md:hidden" onClick={()=> setOpenMenu(!openMenu)}>
          {openMenu ? <X className='h-6 w-6'/>:<Menu className='h-6 w-6'/>}
        </Button>
        </div>
        {openMenu && (
          <div className='flex flex-col gap-4 border-t border-slate-100 px-4 py-4 sm:px-6 md:hidden '>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-800" onClick={()=>setModelOpen(!modelOpen)}>
              Signin
            </Button>
          </div>
        )}

      </header>
      <Dialog open={modelOpen} onOpenChange={setModelOpen} >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader className='items-center text-center'>
            <img src={logo} className='w-10 h-10 rounded-md object-contain'/>
            <DialogTitle className="mt-2 text-lg font-semibold">
              AssetMarket
            </DialogTitle>
          </DialogHeader>
          <Button variant="outline" className="mt-2 w-full gap-2">
            <FcGoogle className='w-4 h-4'>
            </FcGoogle>
              Continue with Google
          </Button>
          <p className="mt-4 text-center text-xs text-slate-400">
            Secure Authentication by Firebase
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Home
