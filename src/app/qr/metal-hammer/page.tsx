import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Metal Hammer - QR - Bad Contact',
  description: 'QR code for metal hammer in issue for the 40 years of metal hamemr greece featuring bad contact.',
  icons: {
    icon: '/images/favicon.png',
  },
}
/**
 * Keep this as a Server Component
 * @constructor
 */
export default function Page() {
  redirect('/')
}
