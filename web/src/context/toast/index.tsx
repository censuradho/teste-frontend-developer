import { Toast } from "@/components/common";
import { ToastMessage } from "@/components/common/toast/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ToastContextProps } from "./types";

const ToastContext = createContext({} as ToastContextProps)

const defaultMessage = {
  title: '',
  description: ''
}

export function ToastProvider ({ children}: PropsWithChildren) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState<ToastMessage | null>()

  const handleNotify = (message: ToastMessage) => {
    setOpen(true)
    setMessage(message)
  }

  return (
    <ToastContext.Provider
      value={{
        onNotify: handleNotify
      }}
    >
      <Toast 
        open={open} 
        onOpenChange={setOpen}
        message={message}
      />
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)