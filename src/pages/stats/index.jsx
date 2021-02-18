import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import{getArticles} from "../../api/articles"


export default class Stats extends Component {
    render() {
        return (
            <Container>
                <p>List your total articles</p>
                <p>List your total claps</p>
                <p>List your total comments</p>
            </Container>
        )
    }
}
