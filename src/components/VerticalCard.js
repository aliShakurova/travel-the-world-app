import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./VerticalCard.scss";

function VerticalCard(props) {

    const cardData = props.data

    return (
        <div className="vertical-card">
            <Card>
                <div className="vertical-card-body">
                    <CardMedia
                        component="img"
                        className="card-img"
                        alt="card img"
                        image={cardData.image}
                    />
                    <div className="card-content">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cardData.text}
                            </Typography>
                            {(cardData.hotelCost || cardData.flightCost || cardData.total) && <div className="additional-info">
                                {cardData.flightCost && <div className="additional-info-item">{`Flight cost: ${cardData.flightCost}$`}</div>}
                                {cardData.hotelCost && <div className="additional-info-item">{`Hotel cost: ${cardData.hotelCost}$`}</div>}
                                {cardData.total && <div className="additional-info-item">{`Total: ${cardData.total}$`}</div>}
                            </div>}
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default VerticalCard;