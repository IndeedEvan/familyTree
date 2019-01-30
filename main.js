
    var chart_config = {
        chart: {
            container: "#tree",
			rootOrientation: "SOUTH",
            animateOnInit: true,
            connectors: {
				type: "step",
			},
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
			text: {
						name: "Bernadette Hill",
						title: "Vendeuse",
						contact: "1815 - 1880",
			},
            children: [
                {
					text: {
						name: "Mark Hill",
						title: "Boulanger",
						contact: "1850 - 1945",
					},  
                    collapsed: false,
                    children: [
                        {
                            text: {
								name: "Paul Hill",
								title: "Docteur",
								contact: "1930 - 1981",
							}
                        },
						{
                            text: {
								name: "Sarah Hill",
								title: "Mathématicienne",
								contact: "1930 - 1981",
							}
                        }
                    ]
                },
                {
                    text: {
						name: "Thomas Hill",
						title: "Boucher",
						contact: "1867 - 1914",
					}
                    /*childrenDropLevel: 1,
                    children: [
                        {
                            image: "img/woodhouse.png"
                        }
                    ]*/
                },
                {
                    pseudo: true,
                    children: [
                        {
                            text: {
								name: "Christine Hill",
								title: "Poisonnière",
								contact: "1896 - 1972",
							}
                        },
                        {
                            text: {
								name: "George Hill",
								title: "Boucher",
								contact: "1896 - 1961",
							}
                        }
                    ]
                }
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/