import React from 'react'
import { Tab , } from 'semantic-ui-react'
import './SecondaryPointing.css'
import Dashboard from '../pages/Dashboard';



const panes = [
    {
        menuItem: 'Dashboard',
        render: () => <Tab.Pane  className="tab_content"  attached={false}><Dashboard/>
        </Tab.Pane>,
    },
    {
        menuItem: 'View Jobs',
        render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
        menuItem: 'Messages',
        render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
        menuItem: 'Calender',
        render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },

    //
    // {
    //     menuItem: 'Credits',
    //     render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    // },
    // {
    //     menuItem: 'Plans',
    //     render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    // },
    // {
    //     menuItem: 'Project Invitation',
    //     render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    // },
    // {
    //     menuItem: 'Contest',
    //     render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    // },
    // {
    //     menuItem: 'Settings',
    //     render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    // },


]

const SecondaryPointing = () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default SecondaryPointing
