import React from "react";
import '../../customStyle.scss';
import PropTypes from "prop-types";
import socketIOClient from "socket.io-client";
import PubSub from 'PubSub';
import { BehaviorSubject, Observable } from 'rxjs';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import MailOutline from "@material-ui/icons/MailOutline";

import Assignment from "@material-ui/icons/Assignment";
import Table from "components/Table/Table.jsx";

import TestPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";
import Amplify, { API } from 'aws-amplify';
import aws_exports from '../../../src/aws-exports';
Amplify.configure(aws_exports);
const pubsub = new PubSub();
let apiName = 'sampleCloudApi';
let path = '/items';
class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: apiName,
            showWeb: '',
            showWeb1: '',
            Topic: [],
            myArr: [],
            word: 'downlink',
            word1: 'rxinfo',
            url: 'http://elancethemes.com/28/publishing_company/wp-content/uploads/2018/11/9-stage.png',
        }
    }
    componentDidMount() {
        API.get(apiName, path).then(response => {
            console.log(response)
        });
        console.log('xxxx', this.state.url);
        // const { endpoint } = this.state;
        // const socket = socketIOClient(endpoint);
        // socket.on('message', (data) => {

        //     this.setState({
        //         topic: data.topic,
        //         msg: data.message,

        //     });



        //     if (this.state.topic) {
        //         let decoder = new TextDecoder('utf8');
        //         let text = decoder.decode(this.state.msg);
        //         console.log(JSON.parse(text));
        //         console.log('xxx x x xx message', JSON.parse(text));

        //         this.setState({
        //             msg: JSON.parse(text),

        //         });

        //     }


        //     if (this.state.topic.includes('downlink')) {


        //         this.setState({

        //             url: 'http://elancethemes.com/28/publishing_company/wp-content/uploads/2018/11/yellow.gif',
        //             mac: this.state.msg.mac,
        //             gatewayEUI: this.state.msg.gatewayEUI,
        //             fCntDown: this.state.msg.fCntDown,
        //             frequency: this.state.msg.frequency,
        //         })
        //         console.log('message',this.state.mac);
        //         localStorage.setItem('topic', data.topic);
        //         localStorage.setItem('msg', JSON.stringify(this.state.msg));
        //         pubsub.publishSync('DATA_MQTT', {
        //             topic: data.topic,
        //             msg: this.state.msg
        //         });
        //     } else if (this.state.topic.includes('rxinfo')) {

        //         this.setState({
        //             url: 'http://elancethemes.com/28/publishing_company/wp-content/uploads/2018/11/5-stage.gif'
        //         })
        //         localStorage.setItem('topic', data.topic);
        //         localStorage.setItem('msg', JSON.stringify(this.state.msg));
        //         // pubsub.publish('DATA_MQTT', {
        //         //     topic: data.topic,
        //         //     msg: this.state.msg
        //         // });


        //     } else {
        //         this.setState({
        //             url: 'http://elancethemes.com/28/publishing_company/wp-content/uploads/2018/11/9-stage.png'
        //         })


        //     }





        // });


    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <table className="fixed-plugin table">
                <thead>
                    <tr>
                        <th>Topic </th>
                        <th>gatewayEUI </th>
                        <th>fCntDown </th>
                        <th>frequency </th>
                        <th>Status </th>
                       
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.myArr.map((top, index) =>
                                <tr key={index}>
                                    <td>{top.topic}</td>
                                    <td>{top.msg.gatewayEUI}</td>
                                    <td>{top.msg.fCntDown}</td>
                                    <td>{top.msg.frequency}</td>
                                    <td>{top.topic.includes(this.state.word) ? <span className="badge filter badge-blue active" data-color="blue"></span> : <span className="badge filter badge-orange" data-color="orange"></span>}</td>
                                </tr>
                            )
                        }
                  
                    </tbody>
            </table> */}

                {/* <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <MailOutline />
                                </CardIcon>
                                <h4 className="block-title">Application</h4>
                            </CardHeader>
                            <CardBody>



                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <MailOutline />
                                </CardIcon>
                                <h4 className="block-title">GateWay</h4>
                            </CardHeader>
                            <CardBody>
                                <div className="hoverWrapper">
                                <img src={this.state.url} /><span>deviceeui</span>
                             
                                    <div className="hoverShow1">
                                        <table className="fixed-plugin table">

                                            <tr>
                                                <th>Mac </th>
                                                <td> {this.state.mac}</td>
                                            </tr>
                                            <tr>
                                                <th>gatewayEUI </th>
                                                <td> {this.state.gatewayEUI}</td>
                                            </tr>
                                            <tr>
                                                <th>fCntDown </th>
                                                <td> {this.state.fCntDown}</td>
                                            </tr>
                                            <tr>
                                                <th>frequency </th>
                                                <td> {this.state.frequency}</td>
                                            </tr>

                                        </table>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <MailOutline />
                                </CardIcon>
                                <h4 className="block-title">Node</h4>
                            </CardHeader>
                            <CardBody>
                                <div className="hoverWrapper">
                                    <img src={this.state.url} /><span>deviceeui</span>

                                    <div className="hoverShow1">
                                       
                                        <table className="fixed-plugin table">
                                                <tr>
                                                    <th>Mac </th>
                                                    <td> {this.state.mac}</td>
                                                </tr>
                                                <tr>
                                                    <th>gatewayEUI </th>
                                                    <td> {this.state.gatewayEUI}</td>
                                                </tr>
                                                <tr>
                                                    <th>fCntDown </th>
                                                    <td> {this.state.fCntDown}</td>
                                                </tr>
                                                <tr>
                                                    <th>frequency </th>
                                                    <td> {this.state.frequency}</td>
                                                </tr>
                                        </table>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer> */}
            </div>
        );
    }
}

TestPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(TestPageStyle)(TestPage);
