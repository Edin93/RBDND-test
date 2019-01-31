const data = {
    activities: [
        {
        id: 'A1',
        tasks: [
            {
            id: 'A1.T1'
            }, {
            id: 'A1.T2'
            }, {
            id: 'A1.T3'
            }, {
            id: 'A1.T4'
            }
        ]
        }, {
        id: 'A2',
        tasks: [
            {
            id: 'A2.T1'
            }, {
            id: 'A2.T2'
            }, {
            id: 'A2.T3'
            }
        ]
        }, {
        id: 'A3',
        tasks: [
            {
            id: 'A3.T1',
            },
        ]
        }, {
        id: 'A4',
        tasks: [
            {
            id: 'A4.T1',
            }
        ]
        }, {
        id: 'A5',
        tasks: [
            {
            id: 'A5.T1'
            }, {
            id: 'A5.T2'
            }
        ]
        }, {
        id: 'A6',
        tasks: [
            {
            id: 'A6.T1'
            }, {
            id: 'A6.T2'
            }, {
            id: 'A6.T4'
            }
        ]
        }, {
        id: 'A7',
        tasks: [
            {
            id: 'A7.T1'
            }, {
            id: 'A7.T2'
            }, {
            id: 'A7.T3'
            }, {
            id: 'A7.T4'
            }
        ]
        }, {
        id: 'A8',
        tasks: [
            {
            id: 'A8.T1'
            }, {
            id: 'A8.T2'
            }, {
            id: 'A8.T3'
            }, {
            id: 'A8.T4'
            }
        ]
        },{
            id: 'A9',
            tasks: [
                {
                id: 'A9.T1'
                }, {
                id: 'A9.T2'
                }, {
                id: 'A9.T3'
                }
            ]
        },
        {
            id: 'A10',
            tasks: [
                {
                id: 'A10.T1'
                }, {
                id: 'A10.T2'
                }, {
                id: 'A10.T3'
                }, {
                id: 'A10.T4'
                }
            ]
        },{
            id: 'A11',
            tasks: [
                {
                id: 'A11.T1'
                }, {
                id: 'A11.T2'
                }
            ]
        },{
            id: 'A12',
            tasks: [
                {
                id: 'A12.T1'
                }, {
                id: 'A12.T2'
                }, {
                id: 'A12.T3'
                }, {
                id: 'A12.T4'
                }
            ]
        },{
            id: 'A13',
            tasks: [
                {
                id: 'A13.T1'
                }
            ]
        },{
            id: 'A14',
            tasks: [
                {
                id: 'A14.T1'
                }, {
                id: 'A14.T2'
                }, {
                id: 'A14.T3'
                }
            ]
        },{
            id: 'A15',
            tasks: [
                {
                id: 'A15.T1'
                }, {
                id: 'A15.T2'
                }
            ]
        }
    ],

    releases: [
        {
        id: 'Release 1',
        storiesByTasks: {
            'A1.T1': [
            {
                id: 'A1.T1.S1',
                // image: 'https://picsum.photos/120/120/?1084',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A1.T1.S2',
                // image: 'https://picsum.photos/120/120/?5656',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],

            'A1.T2': [
            {
                id: 'A1.T2.S3',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A1.T2.S4',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A1.T2.S5',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],

            'A2.T2': [
            {
                id: 'A2.T2.S12',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A2.T2.S13',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A2.T2.S14',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],

            'A5.T2': [
            {
                id: 'A5.T2.S21',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T2.S22',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T2.S23',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A6.T2': [
            {
                id: 'A6.T2.S28',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A6.T2.S29',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A6.T2.S30',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A7.T2': [
            {
                id: 'A7.T2.S31',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S32',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S33',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A8.T2': [
            {
                id: 'A8.T2.S48',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T2.S49',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T2.S50',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A9.T1': [
            {
                id: 'A9.T1.S51',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A9.T1.S52',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A9.T1.S53',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A10.T3': [
                {
                    id: 'A10.T3.S54',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A10.T3.S55',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A10.T3.S56',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
            'A11.T2': [
                {
                    id: 'A11.T2.S57',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A11.T2.S58',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A11.T2.S59',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
            'A12.T3': [
                {
                    id: 'A12.T3.S60',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A12.T3.S61',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A12.T3.S62',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
            'A13.T1': [
                {
                    id: 'A13.T1.S63',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A13.T1.S64',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
            'A14.T2': [
                {
                    id: 'A14.T2.S65',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
            'A15.T1': [
                {
                    id: 'A15.T1.S566',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A15.T1.S67',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
            ],
        }
        }, {
        id: 'Release 2',
        storiesByTasks: {
            'A1.T2': [
            {
                id: 'A1.T2.S156',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A1.T2.S657',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A2.T1': [
            {
                id: 'A2.T1.S10',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],

            'A5.T1': [
            {
                id: 'A5.T1.S15',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T1.S16',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T1.S17',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A6.T1': [
            {
                id: 'A6.T1.S24',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A6.T1.S25',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A7.T2': [
            {
                id: 'A7.T2.S34',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S35',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S36',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S37',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A8.T1': [
            {
                id: 'A8.T1.S42',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T1.S43',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T1.S44',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A8.T3': [
            {
                id: 'A8.T3.S51',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T3.S52',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T3.S53',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ]
        }
        }, {
        id: 'Release 3',
        storiesByTasks: {
            'A1.T2': [
            {
                id: 'A1.T2.S8',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A1.T2.S9',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A2.T1': [
            {
                id: 'A2.T1.S11',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],

            'A5.T1': [
            {
                id: 'A5.T1.S18',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T1.S19',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A5.T1.S20',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A6.T1': [
            {
                id: 'A6.T1.S26',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A6.T1.S27',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A7.T2': [
            {
                id: 'A7.T2.S38',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S39',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S40',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A7.T2.S41',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A8.T1': [
            {
                id: 'A8.T1.S45',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T1.S46',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T1.S47',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ],
            'A8.T3': [
            {
                id: 'A8.T3.S54',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T3.S55',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }, {
                id: 'A8.T3.S56',
                // image: 'https://picsum.photos/120/120/?random',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
            }
            ]
        }
        },
        {
            id: 'Release 4',
            storiesByTasks: {
                'A1.T2': [
                {
                    id: 'A1.T2.S148',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A1.T2.S149',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A2.T1': [
                {
                    id: 'A2.T1.S1411',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
    
                'A5.T1': [
                {
                    id: 'A5.T1.S1418',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A5.T1.S1419',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A5.T1.S1420',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A6.T1': [
                {
                    id: 'A6.T1.S1426',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A6.T1.S1427',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A7.T2': [
                {
                    id: 'A7.T2.S1438',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S1439',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S1440',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S1441',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A8.T1': [
                {
                    id: 'A8.T1.S1445',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T1.S1446',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T1.S1447',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A8.T3': [
                {
                    id: 'A8.T3.S1454',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T3.S1455',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T3.S1456',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ]
            },
        },
        {
            id: 'Release 5',
            storiesByTasks: {
                'A1.T2': [
                {
                    id: 'A1.T2.S2048',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A1.T2.S2049',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A2.T1': [
                {
                    id: 'A2.T1.S20411',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
    
                'A5.T1': [
                {
                    id: 'A5.T1.S20418',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A5.T1.S20419',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A5.T1.S20420',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A6.T1': [
                {
                    id: 'A6.T1.S20426',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A6.T1.S20427',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A7.T2': [
                {
                    id: 'A7.T2.S20438',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S20439',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S20440',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A7.T2.S20441',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A8.T2': [
                {
                    id: 'A8.T1.S20445',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T1.S20446',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T1.S20447',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A8.T4': [
                {
                    id: 'A8.T3.S20454',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T3.S20455',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }, {
                    id: 'A8.T3.S20456',
                    // image: 'https://picsum.photos/120/120/?random',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                }
                ],
                'A9.T2': [
                    {
                        id: 'A9.T2.S23654',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A9.T2.S2955',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A9.T2.S20156',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }
                ],
                'A10.T1': [
                    {
                        id: 'A10.T1.S208364',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A10.T1.S208365',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A10.T1.S208366',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }
                ],
                'A11.T2': [
                    {
                        id: 'A11.T2.S20454',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A11.T2.S20455',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }, {
                        id: 'A11.T2.S20456',
                        // image: 'https://picsum.photos/120/120/?random',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
                    }
                ]
            },
        }
    ]
    };

export default data;





































































































// >>>>>>>>>>>>>>>>>>>> IN CASE OF DAMAGE <<<<<<<<<<<<<<<<<<<
// const data = {
//     activities: [
//         {
//         id: 'A1',
//         tasks: [
//             {
//             id: 'A1.T1'
//             }, {
//             id: 'A1.T2'
//             }, {
//             id: 'A1.T3'
//             }, {
//             id: 'A1.T4'
//             }
//         ]
//         }, {
//         id: 'A2',
//         tasks: [
//             {
//             id: 'A2.T1'
//             }, {
//             id: 'A2.T2'
//             }, {
//             id: 'A2.T3'
//             }
//         ]
//         }, {
//         id: 'A3',
//         tasks: []
//         }, {
//         id: 'A4',
//         tasks: []
//         }, {
//         id: 'A5',
//         tasks: [
//             {
//             id: 'A5.T1'
//             }, {
//             id: 'A5.T2'
//             }
//         ]
//         }, {
//         id: 'A6',
//         tasks: [
//             {
//             id: 'A6.T1'
//             }, {
//             id: 'A6.T2'
//             }, {
//             id: 'A6.T4'
//             }
//         ]
//         }, {
//         id: 'A7',
//         tasks: [
//             {
//             id: 'A7.T1'
//             }, {
//             id: 'A7.T2'
//             }, {
//             id: 'A7.T3'
//             }, {
//             id: 'A7.T4'
//             }
//         ]
//         }, {
//         id: 'A8',
//         tasks: [
//             {
//             id: 'A8.T1'
//             }, {
//             id: 'A8.T2'
//             }, {
//             id: 'A8.T3'
//             }, {
//             id: 'A8.T4'
//             }
//         ]
//         }
//     ],

//     releases: [
//         {
//         id: 'Release 1',
//         storiesByTasks: {
//             'A1.T1': [
//             {
//                 id: 'A1.T1.S1'
//             }, {
//                 id: 'A1.T1.S2'
//             }
//             ],

//             'A1.T2': [
//             {
//                 id: 'A1.T2.S3'
//             }, {
//                 id: 'A1.T2.S4'
//             }, {
//                 id: 'A1.T2.S5'
//             }
//             ],

//             'A2.T2': [
//             {
//                 id: 'A2.T2.S12'
//             }, {
//                 id: 'A2.T2.S13'
//             }, {
//                 id: 'A2.T2.S14'
//             }
//             ],

//             'A5.T2': [
//             {
//                 id: 'A5.T2.S21'
//             }, {
//                 id: 'A5.T2.S22'
//             }, {
//                 id: 'A5.T2.S23'
//             }
//             ],
//             'A6.T2': [
//             {
//                 id: 'A6.T2.S28'
//             }, {
//                 id: 'A6.T2.S29'
//             }, {
//                 id: 'A6.T2.S30'
//             }
//             ],
//             'A7.T2': [
//             {
//                 id: 'A7.T2.S31'
//             }, {
//                 id: 'A7.T2.S32'
//             }, {
//                 id: 'A7.T2.S33'
//             }
//             ],
//             'A8.T2': [
//             {
//                 id: 'A8.T2.S51'
//             }, {
//                 id: 'A8.T2.S52'
//             }, {
//                 id: 'A8.T2.S53'
//             }
//             ]
//         }
//         }, {
//         id: 'Release 2',
//         storiesByTasks: {
//             'A1.T2': [
//             {
//                 id: 'A1.T2.S6'
//             }, {
//                 id: 'A1.T2.S7'
//             }
//             ],
//             'A2.T1': [
//             {
//                 id: 'A2.T1.S10'
//             }
//             ],

//             'A5.T1': [
//             {
//                 id: 'A5.T1.S15'
//             }, {
//                 id: 'A5.T1.S16'
//             }, {
//                 id: 'A5.T1.S17'
//             }
//             ],
//             'A6.T1': [
//             {
//                 id: 'A6.T1.S24'
//             }, {
//                 id: 'A6.T1.S25'
//             }
//             ],
//             'A7.T2': [
//             {
//                 id: 'A7.T2.S34'
//             }, {
//                 id: 'A7.T2.S35'
//             }, {
//                 id: 'A7.T2.S36'
//             }, {
//                 id: 'A7.T2.S37'
//             }
//             ],
//             'A8.T1': [
//             {
//                 id: 'A8.T1.S42'
//             }, {
//                 id: 'A8.T1.S43'
//             }, {
//                 id: 'A8.T1.S44'
//             }
//             ],
//             'A8.T3': [
//             {
//                 id: 'A8.T3.S51'
//             }, {
//                 id: 'A8.T3.S52'
//             }, {
//                 id: 'A8.T3.S53'
//             }
//             ]
//         }
//         }, {
//         id: 'Release 3',
//         storiesByTasks: {
//             'A1.T2': [
//             {
//                 id: 'A1.T2.S8'
//             }, {
//                 id: 'A1.T2.S9'
//             }
//             ],
//             'A2.T1': [
//             {
//                 id: 'A2.T1.S11'
//             }
//             ],

//             'A5.T1': [
//             {
//                 id: 'A5.T1.S18'
//             }, {
//                 id: 'A5.T1.S19'
//             }, {
//                 id: 'A5.T1.S20'
//             }
//             ],
//             'A6.T1': [
//             {
//                 id: 'A6.T1.S26'
//             }, {
//                 id: 'A6.T1.S27'
//             }
//             ],
//             'A7.T2': [
//             {
//                 id: 'A7.T2.S38'
//             }, {
//                 id: 'A7.T2.S39'
//             }, {
//                 id: 'A7.T2.S40'
//             }, {
//                 id: 'A7.T2.S41'
//             }
//             ],
//             'A8.T1': [
//             {
//                 id: 'A8.T1.S45'
//             }, {
//                 id: 'A8.T1.S46'
//             }, {
//                 id: 'A8.T1.S47'
//             }
//             ],
//             'A8.T3': [
//             {
//                 id: 'A8.T3.S54'
//             }, {
//                 id: 'A8.T3.S55'
//             }, {
//                 id: 'A8.T3.S56'
//             }
//             ]
//         }
//         }
//     ]
//     };

// export default data;
