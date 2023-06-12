
import React from "react";
import classes from "./style";
import mainClasses from '../Main/style'
import { EventTypes } from "../../Constants/constants";
import colors from "../../Constants/colors";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import check from '../../assets/check.png';
import quiz from '../../assets/quiz.png';
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography
} from "@mui/material";

const UpcomingEvent = ({ type, title, category }) => {
    const bgColor = type === EventTypes.test ? colors.testLight : colors.missionLight;
    const iconColor = type === EventTypes.test ? colors.testDark : colors.missionDark;
    const srcImage = type === EventTypes.test ? quiz : check;
    const style = classes(bgColor, iconColor);
    const mainStyle = mainClasses();
    return (
        <Card style={style.container}>
            <CardContent>
                <Typography style={style.text}>
                    <p>
                        {type}
                    </p>
                    <p style={mainStyle.margin}>{` : `}</p>
                    <p>
                        {title}
                    </p>
                </Typography>
                <Typography color="textSecondary">{category}</Typography>
                <CardActions style={style.iconContainer}>
                    <IconButton aria-label="more" style={style.icon}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
            <div style={style.imageContainer}>
                <img src={srcImage} alt={type} style={style.image} />
            </div>

        </Card>
    )
}

export default UpcomingEvent;