'use client'
import { ReactNodeWrapper } from '@/types/ReactNodeWrapper'
import Link from 'next/link'
import useSound from 'use-sound'

interface SoundLinkProps extends ReactNodeWrapper {
  href: string
  className?: string
}

const SoundLink = ({ href, className = '', children, ...props }: SoundLinkProps) => {
  // const dispatch = useAppDispatch();
  const [play, { stop }] = useSound('/sounds/hover.mp3')

  return (
    <Link
      href={href}
      onMouseEnter={() => {
        play()
      }}
      onMouseLeave={() => {
        stop()
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

export default SoundLink
