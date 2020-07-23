import React from "react";
import Warning from "@material-ui/icons/Warning";
import Icon from "@material-ui/core/Icon";
import Notes from "@material-ui/icons/Notes";
import WorkOutline from '@material-ui/icons/WorkOutline'
import DateRange from "@material-ui/icons/DateRange";
import AccountBoxRounded from '@material-ui/icons/AccountBoxRounded'
import { makeStyles } from "@material-ui/core/styles";
import Danger from "../Typography/Danger";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Card from '../Card/Card';
import CardHeader from "../Card/CardHeader";
import CardIcon from "../Card/CardIcon";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";


const Dashboard= () =>{


        const useStyles = makeStyles(styles);
        const classes = useStyles();
        return(<div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={4}  >
            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                       <AccountBoxRounded/>
                    </CardIcon>
                    <p className={classes.cardCategory}>HeadLine</p>
                    <h3 className={classes.cardTitle}>
                        <small>Job Title looking for</small>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={classes.stats}>
                        <Danger>
                            <Warning />
                        </Danger>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Get more space
                        </a>
                    </div>
                </CardFooter>
            </Card>
                    </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Notes />
                    </CardIcon>
                    <p className={classes.cardCategory}>Resume</p>
                    <h3 className={classes.cardTitle}>Upload fn</h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={classes.stats}>
                        <DateRange />
                        Last updated date
                    </div>
                </CardFooter>
            </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <WorkOutline/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Looking for</p>
                            <h3 className={classes.cardTitle}>
                                <small>Part Time</small><br/>
                                <small>Full Time</small><br/>
                                <small>Internship</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                {/*<Danger>*/}
                                {/*    <Warning />*/}
                                {/*</Danger>*/}
                                <div>
                                    Best Wishes
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <ul>
                {/*<li>Welcome {decode(localStorage.freelanceToken).email}</li>*/}
                <li>Headline</li>
                <li>resume update</li>
                <li>Looking for - FT, PT, Intern</li>
                <li>Skills</li>
                <li>Current Company</li>
                <li>Past Companies</li>
                <li>Current City</li>
                <li>Remote Preference</li>
                <li>Desired Work Cities</li>
                <li>Work Specialization</li>
                <li>years of experiecne</li>
            </ul>
        </div>)

}

export default Dashboard