import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Birthday habiby! 🎂',
  description: 'A special birthday message for habiby',
  openGraph: {
    title: 'Happy Birthday habiby! 🎂',
    description: 'A special birthday message for habiby',
    images: ['/images/pic1.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.aya
  return <GiftClient data={data} />
}
