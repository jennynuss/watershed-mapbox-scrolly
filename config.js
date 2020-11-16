var config = {
    style: 'mapbox://styles/jennynuss96/ckhduzp1t02je1at0n7apgjs5',
    accessToken: 'pk.eyJ1IjoiamVubnludXNzOTYiLCJhIjoiY2toZHY0bWpzMDYyeTJxcm5kaGVocTA3eSJ9.yDETe8BSxEp_jgsbiKGF-g',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'A Watershed Moment',
    subtitle: 'More than half the worlds water comes from mountainous watersheds now impacted by environmental change.',
    byline: 'By Christina Procopiou',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'my-story-chapter-1',
            title: 'Chapter 1',
            image: 'http://eesa.lbl.gov/wp-content/uploads/2020/09/eesa-area.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-127.71563, 46.15237],
                zoom: 2.64,
                pitch: 4,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'my-story-chapter-2',
            title: 'Chapter 2',
            image: 'http://eesa.lbl.gov/wp-content/uploads/2020/04/Screen-Shot-2020-01-30-at-3.08.49-PM.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.25168, 37.87574],
                zoom: 15.0,
                pitch: 0.00,
                bearing: -5.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'my-story-chapter-3',
            title: 'Chapter 3',
            image: 'file:///Users/jennynuss/Desktop/storytelling-master/assets/watershed SFA-1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-105.61092, 39.24014],
                zoom: 6.75,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
