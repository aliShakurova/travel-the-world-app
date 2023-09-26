import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import HorizontalCard from "./HorizontalCard";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

import "./FindOfferForm.scss";

export default function FindOfferForm() {
    const [data, setData] = useState(null);
    const { register, handleSubmit } = useForm();

    const offers = [
        { title: "Spain", subTitle: "Learn more about this country", hotelCost: 80, flightCost: 300, total: 380, image: "/images/justin-kauffman.jpg", text: "A link between Europe and Africa, Spain is an important resting spot for migratory birds. Spain is also home to such mammals as the wolf, lynx, wildcat, fox, wild boar, deer, hare, and wild goat. Streams and lakes shelter trout, barbel, and tench fish. But many species of wildlife face threats from habitat loss and pollution.\nDue to centuries of tree cutting, large forests are now found only in the north Pyrenees and the Asturias-Galicia area. Planting new trees is difficult where sheep and goats graze. Erosion and river pollution are also problems. Spain has created many national parks and refuges, but they only cover about 7 percent of the country." },
        { title: "Italy", subTitle: "Learn more about this country", hotelCost: 90, flightCost: 600, total: 690, image: "/images/braden-collum.jpg", text: "For 22 centuries, Italians and their ancestors have cleared fields, grazed livestock, and hunted wild animals. Forests that once covered large areas are gone. But the country's remote places and many national parks still have wilderness largely untouched by humans.\n The lower slopes of Italy's Alps are covered with forests. Above these woodlands are meadows that explode with specially adapted wildflowers in the spring. Throughout Italy, millions of birds stop to rest during their annual migration to Africa." },
        { title: "Tailand", subTitle: "Learn more about this country", hotelCost: 60, flightCost: 700, total: 760, image: "/images/shifaaz-shamoon.jpg", text: "Thailand is home to Buddhist temples, exotic wildlife and spectacular islands. It is also known for its fascinating history, unique culture and delectable local food. The tourism industry plays an important role in the Thai economy and contributes an estimated 18.4 percent to the national GDP. The tourism sector not only depends on foreign visitors but also domestic tourists whose number dwarfs that of foreign tourists. In 2019, Thailand had 39,797,406 visitors." },
        { title: "Cyprus", subTitle: "Learn more about this country", hotelCost: 80, flightCost: 400, total: 480, image: "/images/daniela-cuevas.jpg", text: "Cyprus is an island country in the Middle East in the Eastern Mediterranean Sea. Nearby countries include Turkey, Syria, and Lebanon. Geographically, Cyprus is a central plain with mountains to the north and south. The government system is a republic; the chief of state and head of government is the president. Cyprus has a market economy system in which the prices of goods and services are determined in a free price system. Cyprus is a member of the European Union (EU)." },
        { title: "United Kindom", subTitle: "Learn more about this country", hotelCost: 150, flightCost: 500, total: 650, image: "/images/jarand-k.jpg", text: "United Kingdom is an island country spanning an archipelago including Great Britain, located in Western Europe comprising England, Scotland, Wales, and Northern Ireland. United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, and the Irish Sea. It lies near vital North Atlantic sea lanes and is only 35 km from France and linked by tunnel under the English Channel. The geography is mostly rugged hills and low mountains. The government system is constitutional monarchy and a Commonwealth realm; the chief of state is the queen, and the head of government is the prime minister. The United Kingdom has an advanced open market economy in which the prices of goods and services are determined in a free price system." },
        { title: "Brazil", subTitle: "Learn more about this country", hotelCost: 60, flightCost: 300, total: 360, image: "/images/julia-solonina.jpg", text: "Brazil has the greatest variety of animals of any country in the world. It is home to 600 mammal species, 1,500 fish species, 1,600 bird species, and an amazing 100,000 different types of insects. Brazil's jungles are home to most of its animal life, but many unique species also live in the pampas and semidesert regions. \n In the central-western part of Brazil sits a flat, swampy area called the Pantanal. This patchwork of flooded lagoons and small islands is the world's largest wetland. Here live giant anacondas, huge guinea pig relatives called capybaras, and fierce South American alligators called caimans." },
        { title: "Germany", subTitle: "Learn more about this country", hotelCost: 100, flightCost: 600, total: 700, image: "/images/tamara-menzi.jpg", text: "Germany is a country located in the heart of Western Europe. It is bordered by Denmark, Poland, Czechia, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands, the North Sea, and the Baltic Sea. Germany has a strategic location on the North European Plain and along the entrance to the Baltic Sea." },
        { title: "Serbia", subTitle: "Learn more about this country", hotelCost: 70, flightCost: 500, total: 570, image: "/images/holly-mandarich.jpg", text: "Serbia is a landlocked country in South East Europe which covers part of the Pannonian Plain and Central and Western Balkan Peninsula. It borders Hungary to the north, Romania and Bulgaria to the east, North Macedonia and Kosovo to the south, and Croatia, Bosnia and Herzegovina, and Montenegro to the west." },
        { title: "Japan", subTitle: "Learn more about this country", hotelCost: 150, flightCost: 1000, total: 1120, image: "/images/h-fall-JWGm.jpg", text: "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south." },
        { title: "China", subTitle: "Learn more about this country", hotelCost: 110, flightCost: 1000, total: 1090, image: "/images/luca-bravo.jpg", text: "China is an authoritarian state ruled by a very powerful central government. A huge workforce and lots of natural resources have driven economic change. This has forced the communist government to permit more economic and personal freedoms, but it has come at a huge cost to the environment." },
        { title: "Latvia", subTitle: "Learn more about this country", hotelCost: 90, flightCost: 800, total: 890, image: "/images/alessio-lin.jpg", text: "More than half of Latvia is covered with forests, meadows, pastures, swamps, and wasteland. Forests account for more than one-third of the total area, and about one-tenth of the forests are cultivated. The larger forest tracts are in the northern part of the Kurzeme Peninsula, along the banks of the Western Dvina, and in the northeast, where conifers (pine and spruce) predominate. Of the deciduous species, birch, aspen, and alder are the most prevalent. Meadows are found both in the river valleys and among the hills." },
        { title: "Canada", subTitle: "Learn more about this country", hotelCost: 130, flightCost: 200, total: 330, image: "/images/cristina-gottardi.jpg", text: "Canada's remote north and extensive forests are home to wildlife, from bears, wolves, beavers, deer, mountain lions, and bighorn sheep to smaller animals like raccoons, otters, and rabbits. The country's lakes and rivers, which contain about 20 percent of all fresh water on Earth, are full of fish such as trout and salmon.\n Canada's prairies in the south are home to bison and pronghorn antelope. Farther north are Canada's sprawling evergreen forests, which have lots of wildlife, including moose and black bears. Even farther north is the cold, bare tundra, where herds of caribou and musk ox live." },
        { title: "Dominican Republic", subTitle: "Learn more about this country", hotelCost: 100, flightCost: 500, total: 600, image: "/images/shifaaz-shamoon.jpg", text: "Tourism has become one of the Dominican Republic’s most important sources of foreign exchange, and since the mid-1980s the country has been one of the Caribbean’s more popular tourist destinations. The favourable climate, beautiful beaches, restored Spanish colonial architecture, and relatively low prices have drawn an increasing number of foreign visitors and encouraged the building or expansion of resorts and airports on the northern, eastern, and southern coasts. In addition, a significant number of visitors have availed themselves of the country’s liberal divorce code. The United States accounts for the majority of vacationers; smaller numbers come from Canada, Italy, and other European nations. The main tourist sites are La Romana, Puerto Plata, Punta Cana, and the colonial centre of Santo Domingo, which was designated a World Heritage site in 1990." },
    ]

    const searchResults = offers.filter((offer) => {
        const isFlightCostSuitable = +data?.flightCost ? +data?.flightCost >= offer.flightCost : true;
        const isHotelCostSuitable = +data?.hotelCost ? +data?.hotelCost >= offer.hotelCost : true;
        const isTotalSuitable = +data?.total ? +data?.total >= offer.total : true;

        if (isFlightCostSuitable && isHotelCostSuitable && isTotalSuitable) {
            return offer;
        }
    })

    const results = searchResults.length ? searchResults : offers;

    const infoIconWithTooltop = (title) => <Tooltip title={title}><InfoIcon fontSize="small" sx={{ padding: "0 6px" }} /></Tooltip>

    const isError = (+data?.flightCost && +data.flightCost < 200) || (+data?.hotelCost && +data.hotelCost < 60) || (+data?.total && +data.total < 330);

    return (
        <div className="find-offer-form-container">
            <form onSubmit={handleSubmit((data) => {
                setData(data)
            })}>
                <div className="field-container">
                    <div className="field-block">
                        <h6>How much are you willing to pay for a <span className="underline-animation">flight</span>?</h6>
                        <input {...register("flightCost")} placeholder="Flight Cost $" /> {infoIconWithTooltop("Flight price range 200$-1000$")}
                        <div className="note">From New York {infoIconWithTooltop("On our website you can find tours only fron New York")}</div>
                    </div>
                    <div className="field-block">
                        <h6>How much are you willing to pay for a <span className="underline-animation">hotel</span>?</h6>
                        <input {...register("hotelCost")} placeholder="Hotel Cost per day $" />{infoIconWithTooltop("Hotel price range 60$-150$")}
                    </div>
                    <div className="field-block">
                        <h6> <span className="underline-animation">Total</span>?</h6>
                        <input {...register("total")} placeholder="Total $" />
                    </div>
                </div>
                <div className="search-btn-block">
                    <Button variant="outlined" style={{ color: "#FFF", borderColor: "#FFF" }} type="submit" >Search</Button>
                </div>
            </form>
            {isError ? <div className="text-note">"Oops! There is nothing on our website that matches your request. Change your search details or see all our offers below."</div> : null}
            <div className="text-note">{searchResults.length ? "Search results" : "All our offers"}</div>
            <div className="search-results">
                {results.map(offer => <HorizontalCard data={offer} />)}
            </div>
        </div>
    );
}