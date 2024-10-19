import CafeStories from '@/components/new-landing-page/CafeStories'
import ContentViral from '@/components/new-landing-page/ContentViral'
import FAQ from '@/components/new-landing-page/FAQ'
import HomeNew from '@/components/new-landing-page/HomeNew'
import Leaderboard from '@/components/new-landing-page/Leaderboard'
import MakeMoney from '@/components/new-landing-page/MakeMoney'
import Renowned from '@/components/new-landing-page/Renowned'

export default function HomeAreaPage() {
  return (
    <div>
        <div>
            <div className=''>
              <HomeNew />
            </div>
            <div className=''>
            <Renowned />
            </div>
            <div className=''>
            <Leaderboard />
            </div>
            <ContentViral />
            <CafeStories />
            <MakeMoney />
            <FAQ />
        </div>
    </div>
  )
}
