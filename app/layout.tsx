import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {title: "Crazy Mike’s Auto Repair & Accessories | Wholesale Auto Parts", description: 'Wholesale repair parts and accessories for shops, mechanics, and resellers. Explore services and sample wholesale pricing tiers.'}
export const viewport: Viewport = {themeColor:'#f7f5ef',colorScheme:'light'}
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics/>}</body></html>}
