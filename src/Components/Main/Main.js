import classes from "./style";
import CustomTitle from "../CustomTitle/CustomTitle";
import strings from "../../Constants/strings";
import colors from "../../Constants/colors";
import { mockEvents } from "./helper";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import CreateTest from "../CreateTest/CreateTest";
import { Grid } from "@mui/material";

const Main = () => {
    const style = classes();
   
    return (
        <Grid container spacing={2} style={style.container}>
            <Grid item xs={9}>
                {/* <CustomTitle title={strings.courses} bgColor={colors.testDark} withLine />
                {/* {
                    mockCourses.map(course => {
                        return <div key={course.number}>
                            <Course
                                number={course.number}
                                name={course.name}
                                image={course.image}
                                status={course.status}
                                isClosed={course.isClosed}
                            />
                        </div>
                    })
                } */}
            </Grid>
            <Grid item xs={9}>
                <CustomTitle title={strings.createCourse} bgColor={colors.testDark} withLine />
                <CreateTest />
            </Grid>
            <Grid item xs={3}>
                <CustomTitle title={strings.upcomingEvents} bgColor={colors.testLight} />
                {mockEvents.map((e) => {
                    return <div key={e.key}>
                        <UpcomingEvent
                            category={e.category}
                            type={e.type}
                            title={e.title}
                        />
                    </div>

                })}
            </Grid>
        </Grid>
    );
}

export default Main;