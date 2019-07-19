import { Repository } from '../models/repository';

export const REPOSITORIES: Repository[] = [
    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'Asheer Rizvi',
        tech: [
            'Angular',
            'Node JS'
        ],
        description: 'Source code of my personal website developed through Angular and Bulma.io',
        link: 'https://github.com/asheerrizvi/asheerrizvi-angular'
    },

    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'The Web Logs',
        tech: [
            'Angular',
            'Node JS',
            'Mongo DB',
            'Express JS'
        ],
        description: 'An experimental MEAN stack blog developed as a personal project and hosted temporarily on Heroku.',
        link: 'https://bitbucket.org/Asheer/theweblogs-prod'
    },

    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'Social Networks',
        tech: [
            'Java'
        ],
        description: 'A simulatory Java Program which models the flow of Information through Social Networks.',
        link: 'https://github.com/asheerrizvi/socialnetworks'
    },

    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'Map Graph',
        tech: [
            'Java'
        ],
        description: 'A Google Maps clone, built using graphs utilizing BFS, Dijkstra & A* search.',
        link: 'https://github.com/asheerrizvi/mapgraph'
    },

    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'Text Edit',
        tech: [
            'Java'
        ],
        description: 'Text editor with spelling suggestions, auto complete and other features built in Java.',
        link: 'https://github.com/asheerrizvi/textedit'
    },

    {
        img: 'https://bulma.io/images/placeholders/640x360.png',
        heading: 'Seismic Monitor',
        tech: [
            'Java'
        ],
        description: 'A Java Application monitoring earthquakes around the world and categorizing them.',
        link: 'https://github.com/asheerrizvi/seismicmonitor'
    }
]