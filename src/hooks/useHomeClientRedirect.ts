import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export const useHomeClientRedirect = () => {
  useEffect(() => {
    redirect('/')
  }, [])
}
