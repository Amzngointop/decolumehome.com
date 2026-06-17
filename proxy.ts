import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Govee-Standing-Million-Ambiance-Changing/dp/B0BLSGHRXB?th=1&linkCode=ll2&tag=decolumehome-20&linkId=d11d62918ea0181c80698fda3e8caafe&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Stepless-Dimmable-Temperature-Brightness/dp/B0F9WHC7F1?th=1&linkCode=ll2&tag=decolumehome-20&linkId=89dde6ee1dbdc6d38d4c56ad3ccea606&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Stepless-Dimmable-Temperature-Brightness/dp/B0F9WL7X6G?th=1&linkCode=ll2&tag=decolumehome-20&linkId=ce9fe0685e492526a347ad8a8040f78d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Floor-Temperatures-Bright-Dimmable/dp/B0F9WJSZPJ?th=1&linkCode=ll2&tag=decolumehome-20&linkId=94b25666d716166e658224897d428daa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SUNMORY-Standing-Stepless-Dimmable-Torchiere/dp/B0D9LWPWWJ?th=1&linkCode=ll2&tag=decolumehome-20&linkId=316b0500127e2cf7356165792cc4f667&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OIYN-Smart-RGBICW-Corner-Floor/dp/B0DRFP3463?th=1&linkCode=ll2&tag=decolumehome-20&linkId=24cf22ee8c42d168816879c15786d1f0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Simple-Standing-Hanging-Bedroom-Without/dp/B07Z5NQPDS?th=1&linkCode=ll2&tag=decolumehome-20&linkId=c4fd84b6a7ed00cfce865c255b12c5bc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Modern-Living-Bedroom-Without/dp/B0CZP14T7B?th=1&linkCode=ll2&tag=decolumehome-20&linkId=be731d6de66faa5905d431db8d609e3d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Shelves-Display-Standing-Organizer-Nightstand/dp/B0BVFX154J?th=1&linkCode=ll2&tag=decolumehome-20&linkId=aacdb17ce7f29268bdb513652041bcbf&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Stepless-Dimmable-Temperature-Brightness/dp/B0BPLWBPM6?th=1&linkCode=ll2&tag=decolumehome-20&linkId=938fbd137a92c341b6b3c2ece87af476&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ambimall-Temperatures-Standing-Adjustable-Classroom/dp/B0C4DGFFCM?th=1&linkCode=ll2&tag=decolumehome-20&linkId=862637d3b03ec239a95541720e874776&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SUNMORY-Standing-Stepless-Dimmable-Torchiere/dp/B0CQY5RK52?th=1&linkCode=ll2&tag=decolumehome-20&linkId=0527dc96c13f876eb2d5f710a1f23ce5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fenmzee-Bedside-Table-Lamp-Bedroom/dp/B0BZXNSW5K?th=1&linkCode=ll2&tag=decolumehome-20&linkId=edc0e4734a76249f2d738f80528b1ab4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cordless-Table-Lamp-Rechargeable-Black/dp/B0DJYBF17N?th=1&linkCode=ll2&tag=decolumehome-20&linkId=a73bba3fb08bd57f1416243e623a1fcb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KDG-Cordless-Portable-Operated-Restaurant/dp/B0BR3R7GHN?th=1&linkCode=ll2&tag=decolumehome-20&linkId=5fabf7cff91cc64e1cd403ed54dfe25e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedside-Aooshine-Minimalist-Bedroom-Bookcase/dp/B074XPNS3Z?th=1&linkCode=ll2&tag=decolumehome-20&linkId=8db0b33da0313efec76689055e0c9732&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fenmzee-Small-Table-Lamp-Bedroom/dp/B0DZD1X83N?th=1&linkCode=ll2&tag=decolumehome-20&linkId=b4072b3f5499240e5fb35c5c243907fa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Small-Bedroom-Lamps-Color-Temperatures/dp/B0BHVP949X?th=1&linkCode=ll2&tag=decolumehome-20&linkId=80fdd2a9ff0ddf34eec8834550a107b9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Innqoo-Dimmable-Candles-Adjustable-Birthday/dp/B0DZFGTCLR?th=1&linkCode=ll2&tag=decolumehome-20&linkId=aad9bb311f673d7362da586e189ca160&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/GODONLIF-Candle-Adjustable-Dimmable-Candles/dp/B0CTJGJL2T?th=1&linkCode=ll2&tag=decolumehome-20&linkId=45e552aaeaf49f7c3d69cfc1a9f780d4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Candle-Warmer-Birthday-Warming-Apartment/dp/B0FRLWC6X9?th=1&linkCode=ll2&tag=decolumehome-20&linkId=2775530911ad4e50f85167edac9e4594&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/seenlast-Adjustable-Electric-Vintage-Scented/dp/B0CDRDK6MR?th=1&linkCode=ll2&tag=decolumehome-20&linkId=9c5d622507893692ebea0ff27519f6b9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Marycele-Candle-Electric-Bedroom-Dimmable/dp/B0BWJRJYS7?th=1&linkCode=ll2&tag=decolumehome-20&linkId=994544d8fd654ebfb038ed9e97b47989&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOACSUCP-Adjustable-Dimmable-Compatible-Charming/dp/B0CCYCBRSK?th=1&linkCode=ll2&tag=decolumehome-20&linkId=4843b26fee284e763945050fb5204e6a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LOHAS-LED-Nightlight-Bedroom-Bathroom/dp/B0BLCD42J7?th=1&linkCode=ll2&tag=decolumehome-20&linkId=111fce050615af934c5c8d46121cc19b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sujeet-Nightlight-Bedroom-Bathroom-Hallway/dp/B0D6GJ9222?th=1&linkCode=ll2&tag=decolumehome-20&linkId=7c6edee00e30fbce5e088babafb1311e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/DORESshop-Brightness-Adjustable-Nightlights-Bathroom/dp/B0DHZ4TF77?th=1&linkCode=ll2&tag=decolumehome-20&linkId=2b36e9ae7546d4729b066e8120839d1f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LOHAS-Adjustable-Brightness-Dimmable-Stairway/dp/B0B3XMTRHN?th=1&linkCode=ll2&tag=decolumehome-20&linkId=b1e4815c63f7f98214cb1e5dffaffa6c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/DORESshop-Dimmable-Nightlight-Adjustable-Brightness/dp/B096XYXY5H?th=1&linkCode=ll2&tag=decolumehome-20&linkId=131c340a0581578c6198c9c1aa004ba7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Projector-Dimmable-Brightness-Nightlight-Bathroom/dp/B0F3C5JXP2?th=1&linkCode=ll2&tag=decolumehome-20&linkId=cfa7f352f058422af9e29e9882e7bd67&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Northern-Projector-Effects-Bedroom-Bluetooth/dp/B0B4518KC2?th=1&linkCode=ll2&tag=decolumehome-20&linkId=f90d4701d1a371439850c113a7c111f0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mooyran-Colorful-Astronaut-Galaxy-Projector/dp/B0D3VS78SJ?th=1&linkCode=ll2&tag=decolumehome-20&linkId=865dc4f551c13e1d47f68ad37781395f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Planetarium-Projector-Bedroom-Galaxy-Nebula/dp/B0D6W3K8C9?&linkCode=ll2&tag=decolumehome-20&linkId=7026b0d83bfc525b02fec0f3b576d5aa&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HERHOTER-Projector-Decoration-Valentines-Christmas/dp/B0CQSJRPXF?th=1&linkCode=ll2&tag=decolumehome-20&linkId=03511ae0bf20e50593c437164cb415e7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rossetta-Projector-Lighting-Effects-Bluetooth/dp/B0CZD1JTZK?th=1&linkCode=ll2&tag=decolumehome-20&linkId=bc05881933dd8dd21a54f95b291b55d0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JIWYJOT-Astronaut-Projector-Birthday-Aesthetic/dp/B0G3VW2724?&linkCode=ll2&tag=decolumehome-20&linkId=dba06c34f9cee33400c49d31bed9b055&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'decolume'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

