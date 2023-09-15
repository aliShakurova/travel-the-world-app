import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './OffersSwiper.scss';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import BasicModal from './BasicModal';
import Typography from '@mui/material/Typography';

export default function OffersSwiper() {
    const offers = [
        { title: "Spain", subTitle: "Learn more about this country", link: "/", image: "/images/justin-kauffman.jpg", description: "A link between Europe and Africa, Spain is an important resting spot for migratory birds. Spain is also home to such mammals as the wolf, lynx, wildcat, fox, wild boar, deer, hare, and wild goat. Streams and lakes shelter trout, barbel, and tench fish. But many species of wildlife face threats from habitat loss and pollution.\nDue to centuries of tree cutting, large forests are now found only in the north Pyrenees and the Asturias-Galicia area. Planting new trees is difficult where sheep and goats graze. Erosion and river pollution are also problems. Spain has created many national parks and refuges, but they only cover about 7 percent of the country." },
        { title: "Italy", subTitle: "Learn more about this country", link: "/", image: "/images/braden-collum.jpg", description: "For 22 centuries, Italians and their ancestors have cleared fields, grazed livestock, and hunted wild animals. Forests that once covered large areas are gone. But the country's remote places and many national parks still have wilderness largely untouched by humans.\n The lower slopes of Italy's Alps are covered with forests. Above these woodlands are meadows that explode with specially adapted wildflowers in the spring. Throughout Italy, millions of birds stop to rest during their annual migration to Africa." },
        { title: "Tailand", subTitle: "Learn more about this country", link: "/", image: "/images/shifaaz-shamoon.jpg", description: "Thailand is home to Buddhist temples, exotic wildlife and spectacular islands. It is also known for its fascinating history, unique culture and delectable local food. The tourism industry plays an important role in the Thai economy and contributes an estimated 18.4 percent to the national GDP. The tourism sector not only depends on foreign visitors but also domestic tourists whose number dwarfs that of foreign tourists. In 2019, Thailand had 39,797,406 visitors." },
        { title: "Cyprus", subTitle: "Learn more about this country", link: "/", image: "/images/daniela-cuevas.jpg", description: "Cyprus is an island country in the Middle East in the Eastern Mediterranean Sea. Nearby countries include Turkey, Syria, and Lebanon. Geographically, Cyprus is a central plain with mountains to the north and south. The government system is a republic; the chief of state and head of government is the president. Cyprus has a market economy system in which the prices of goods and services are determined in a free price system. Cyprus is a member of the European Union (EU)." },
        { title: "United Kindom", subTitle: "Learn more about this country", link: "/", image: "/images/jarand-k.jpg", description: "United Kingdom is an island country spanning an archipelago including Great Britain, located in Western Europe comprising England, Scotland, Wales, and Northern Ireland. United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, and the Irish Sea. It lies near vital North Atlantic sea lanes and is only 35 km from France and linked by tunnel under the English Channel. The geography is mostly rugged hills and low mountains. The government system is constitutional monarchy and a Commonwealth realm; the chief of state is the queen, and the head of government is the prime minister. The United Kingdom has an advanced open market economy in which the prices of goods and services are determined in a free price system." },
        { title: "Brazil", subTitle: "Learn more about this country", link: "/", image: "/images/julia-solonina.jpg", description: "Brazil has the greatest variety of animals of any country in the world. It is home to 600 mammal species, 1,500 fish species, 1,600 bird species, and an amazing 100,000 different types of insects. Brazil's jungles are home to most of its animal life, but many unique species also live in the pampas and semidesert regions. \n In the central-western part of Brazil sits a flat, swampy area called the Pantanal. This patchwork of flooded lagoons and small islands is the world's largest wetland. Here live giant anacondas, huge guinea pig relatives called capybaras, and fierce South American alligators called caimans." },
        { title: "Germany", subTitle: "Learn more about this country", link: "/", image: "/images/tamara-menzi.jpg", description: "Germany is a country located in the heart of Western Europe. It is bordered by Denmark, Poland, Czechia, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands, the North Sea, and the Baltic Sea. Germany has a strategic location on the North European Plain and along the entrance to the Baltic Sea." },
        { title: "Serbia", subTitle: "Learn more about this country", link: "/", image: "/images/holly-mandarich.jpg", description: "Serbia is a landlocked country in South East Europe which covers part of the Pannonian Plain and Central and Western Balkan Peninsula. It borders Hungary to the north, Romania and Bulgaria to the east, North Macedonia and Kosovo to the south, and Croatia, Bosnia and Herzegovina, and Montenegro to the west." },
        { title: "Japan", subTitle: "Learn more about this country", link: "/", image: "/images/h-fall-JWGm.jpg", description: "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south." },
        { title: "China", subTitle: "Learn more about this country", link: "/", image: "/images/luca-bravo.jpg", description: "China is an authoritarian state ruled by a very powerful central government. A huge workforce and lots of natural resources have driven economic change. This has forced the communist government to permit more economic and personal freedoms, but it has come at a huge cost to the environment." },
        { title: "Latvia", subTitle: "Learn more about this country", link: "/", image: "/images/alessio-lin.jpg", description: "More than half of Latvia is covered with forests, meadows, pastures, swamps, and wasteland. Forests account for more than one-third of the total area, and about one-tenth of the forests are cultivated. The larger forest tracts are in the northern part of the Kurzeme Peninsula, along the banks of the Western Dvina, and in the northeast, where conifers (pine and spruce) predominate. Of the deciduous species, birch, aspen, and alder are the most prevalent. Meadows are found both in the river valleys and among the hills." },
        { title: "Canada", subTitle: "Learn more about this country", link: "/", image: "/images/cristina-gottardi.jpg", description: "Canada's remote north and extensive forests are home to wildlife, from bears, wolves, beavers, deer, mountain lions, and bighorn sheep to smaller animals like raccoons, otters, and rabbits. The country's lakes and rivers, which contain about 20 percent of all fresh water on Earth, are full of fish such as trout and salmon.\n Canada's prairies in the south are home to bison and pronghorn antelope. Farther north are Canada's sprawling evergreen forests, which have lots of wildlife, including moose and black bears. Even farther north is the cold, bare tundra, where herds of caribou and musk ox live." },
        { title: "Dominican Republic", subTitle: "Learn more about this country", link: "/", image: "/images/shifaaz-shamoon.jpg", description: "Tourism has become one of the Dominican Republic’s most important sources of foreign exchange, and since the mid-1980s the country has been one of the Caribbean’s more popular tourist destinations. The favourable climate, beautiful beaches, restored Spanish colonial architecture, and relatively low prices have drawn an increasing number of foreign visitors and encouraged the building or expansion of resorts and airports on the northern, eastern, and southern coasts. In addition, a significant number of visitors have availed themselves of the country’s liberal divorce code. The United States accounts for the majority of vacationers; smaller numbers come from Canada, Italy, and other European nations. The main tourist sites are La Romana, Puerto Plata, Punta Cana, and the colonial centre of Santo Domingo, which was designated a World Heritage site in 1990." },
    ]

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {offers.map(offer => <SwiperSlide key={offer.title}>
                    <img src={offer.image} alt="img" />
                    <div className='description'>
                        <div className='title'>{offer.title}</div>
                        <div className='subtitle'>{offer.subTitle}</div>
                        <div className="basic-modal-container">

                        <BasicModal buttonName="Learn More">
                            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 2 }}>
                                {`Learn more about ${offer.title}`}
                            </Typography>
                            <img src={offer.image} alt="img" className='image' style={{width: "100%", maxHeight: "200px", objectFit: "cover"}}/>
                            <Typography id="modal-modal-description"  variant="body1" sx={{ mt: 2 }}>
                                {offer.description}
                            </Typography>
                        </BasicModal>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </>
    );
}
