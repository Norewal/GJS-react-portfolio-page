import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import "./Portfolio.css";
import Card from "../../components/ProjectCard";
import designProjects from "../../components/ProjectDesignData";
import developmentProjects from "../../components/ProjectDevelopmentData";
import webFlowProjects from "../../components/ProjectWebflowData";




function createCard(project) {

    return (
        <Card
            id={project.id}
            key={project.id}
            img={project.imgURL}
            title={project.projectTitle}
            description={project.description}
            subTitle={project.subTitle}
            subDescription={project.subDescription}
            buttonLabel={project.buttonLabel}
            link1={project.link1}
            buttonLabel2={project.buttonLabel2}
            link2={project.link2}
            buttonLabel3={project.buttonLabel3}
            link3={project.link3}
        />
    );
}



class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="portfolio-container">
                    {developmentProjects.map(createCard)}
                </div>
            )
        } else if (this.state.activeTab === 1 ) {
            return (
                <div className="portfolio-container">
                    {webFlowProjects.map(createCard)}
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="portfolio-container">
                    {designProjects.map(createCard)}
                </div>
            )
        }
    
    }

    render() {
        return (
            
            <div id="portfolio" className="portfolio">
            
            <h1>My portfolio</h1>
            <div className="line-container">
                <div className="line"></div>
            </div>
            
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} style={{marginLeft:"-8px"}} ripple>
                    <Tab>Development</Tab>
                    <Tab>Webflow</Tab>
                    <Tab>Design</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>    
                </section>
            </div>
        )
    }
}

export default Portfolio;
