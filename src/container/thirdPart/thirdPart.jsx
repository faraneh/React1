import React, { Component } from 'react';
import './thirdPart.css';
import CommentBox from '../thirdPart/commentBox/commentBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

class ThirdPart extends Component {
    state = { 
        comments : [
            ['Michael Elijah', '@Michaelelijah', 'The networking at Web Summit is like no other European tech conference.', 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
            ['Olivia Harper', '@Oliviaharper', 'The connections you make at Web Summit are unparalleled, we met users all over the world.', 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
            ['James Logan', '@Jameslogan', 'Web Summit will increase your appetite, your inspiration, and your network.', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
            ['Luca Rastelli', '@luca-rastelli', 'Is your marketing strategy ready for 2021? Discover the trends that will change the marketing landscape this year.', 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
            ['Linda Rossi', '@LindaRossi', 'Thats what we strive to accomplish at Terramar with our weekly supervisor development sessions', 'https://images.unsplash.com/photo-1609710111507-14d3d70d588c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhY2V8ZW58MHwyfDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
            ['Kubi Danna', '@KubbaKubba', 'Leaders dont create followers, they create more leaders,', 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
            ['Matt Felix', '@flixito', 'Leaders dont create followers, they create more leaders, and thats what we strive to accomplish at Terramar with our weekly supervisor development sessions', 'https://images.unsplash.com/photo-1622542101479-4476eaeb6cd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
            ['Luisa Felichi', '@LuisaF', 'The networking at Web Summit is like no other European tech conference', 'https://images.unsplash.com/photo-1590616023780-dfff93062e98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxmYWNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
            ['Gabriel Fox', '@Foxxi', 'Leaders dont create followers, leaders create leaders, and followers create followers', 'https://images.unsplash.com/photo-1601588884518-28d7ce3f4b8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxmYWNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],

    ],
        firstBox: 0,
        secondBox: 1,
        thirdBox: 2,
        leftDisabled: true,
        rightDisabled: false,
    }

    rightClickHandler = () => {
        const length = this.state.comments.length;
        if(this.state.thirdBox < length) { 
            this.setState( state => {
                return {
                    firstBox: state.firstBox + 1,
                }
            });
            this.setState( state => {
                return {
                    secondBox: state.secondBox + 1,
                }
            });
            this.setState( state => {
                return {
                    thirdBox: state.thirdBox + 1,
                }
            });
        }
    }

    leftClickHandler = () => {
        const length = this.state.comments.length;
        if(this.state.firstBox > 0) { 
            this.setState( state => {
                return {
                    firstBox: state.firstBox - 1,
                }
            });
            this.setState( state => {
                return {
                    secondBox: state.secondBox - 1,
                }
            });
            this.setState( state => {
                return {
                    thirdBox: state.thirdBox - 1,
                }
            });
        }
    }


    render() { 
        return ( 
            <div className={'ThirdPart'}>
                <div className={'thirdPartHeader'}>
                    <h1>What is ALPHA?</h1>
                    <p>If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for €850.</p>
                    </div>
                <ul className={'Ul'}>
                    <div className={'ArrowPrev'}>
                        <FontAwesomeIcon 
                            icon={faArrowAltCircleLeft} 
                            style={{color: 'rgb(255, 196, 0)', fontSize: '2rem'}}
                            onClick={this.leftClickHandler}
                            disabled={this.state.leftDisabled} />
                    </div>
                    <li className={'Li'}><CommentBox content={this.state.comments[this.state.firstBox]} /></li>
                    <li className={'Li'}><CommentBox content={this.state.comments[this.state.secondBox]} /></li>
                    <li className={'Li'}><CommentBox content={this.state.comments[this.state.thirdBox]} /></li>
                    <div className={'ArrowPrev'}>
                        <FontAwesomeIcon 
                            icon={faArrowAltCircleRight} 
                            style={{color: 'rgb(255, 196, 0)', fontSize: '2rem'}}
                            onClick={this.rightClickHandler}
                            disabled={true} />
                    </div>
                </ul>
            </div>
         );
    }
}
 
export default ThirdPart;