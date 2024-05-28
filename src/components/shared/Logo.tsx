import { cn } from '@/lib/utils'
import Image from 'next/image'

const Logo = ({className, width, height}: {className?: string, width:number, height:number}) => {
  return  <Image src='/assets/icons/logo1.png' width={width} height={height} alt="site_logo" className={cn("object-contain", className)} priority />
}

export default Logo