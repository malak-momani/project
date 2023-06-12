import classes from "./style";
import mainClasses from "../Main/style";
import Checkbox from '../../assets/checkbox.png';
import Minus from '../../assets/minuButton.png'
import { courseStatus } from "../../Constants/constants";
import lock from '../../assets/padlock.png'
import { Card, Grid, Typography } from "@mui/material";

const Course = ({
    name,
    image,
    status,
    isClosed,
    number,
}) => {
    const style = classes(status);
    const mainStyle = mainClasses()
    return (
        <Card style={style.container}>
            <Grid item xs={8}>
                <Typography style={style.text}>
                    <p>
                        {`مساق ${number}`}
                    </p>
                    <p style={mainStyle.margin}>{` : `}</p>
                    <p>
                        {name}
                    </p>

                </Typography>
                <div style={style.statusbox}>
                    {status === courseStatus.completed ?
                        (<img src={Checkbox} alt={status} style={style.iconImage} />)
                        :
                        (<img src={Minus} alt={status} style={style.iconImage} />)}
                    <Typography style={style.status}>{status}</Typography>
                </div>
                {isClosed &&
                <div style={style.lock}>
                    <img src={lock} style={style.lockImage} />
                </div>
            }
            </Grid>
            <Grid item xs={4} style={style.imageContainer}>
                <img src={image} alt={name} style={style.image} />
            </Grid>
        </Card>
    )

}

export default Course;